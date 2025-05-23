import axios from 'axios';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Alert, Button, Skeleton } from 'antd';

const Scroll = () => {
  const LIMIT = 10;

  const getData = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?_page=${pageParam}&_limit=${LIMIT}`
    );
    return {
      data: res.data,
      nextPage: res.data.length === LIMIT ? pageParam + 1 : undefined,
    };
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['albums-button'],
    queryFn: getData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const allPosts = data?.pages?.flatMap((page) => page.data) || [];

  const renderSkeleton = () => {
    return Array.from({ length: 10 }).map((_, idx) => (
      <Skeleton.Input
        key={idx}
        active={true}
        className="!w-full !h-[50px] !mt-[10px]"
      />
    ));
  };

  return (
    <div className="w-[50%] m-auto border border-blue-400 p-4">
      {allPosts.map((value) => (
        <div key={value.id} className="mt-[10px]">
          <Alert message={`${value.title} (${value.id})`} className="h-[50px]" />
        </div>
      ))}

      {(isLoading || isFetchingNextPage) && renderSkeleton()}

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          className="mt-4"
          block
        >
          More 10 products
        </Button>
      )}
    </div>
  );
};

export default Scroll;


/*import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Alert, Button, Skeleton } from 'antd';

const Scroll = () => {
  const skeleton = () => {
    return Array.from({ length: 10 }).map((_, idx) => (
      <Skeleton.Input
        key={idx}
        active={true}
        className='!w-full !h-[50px] !mt-[10px]'
      />
    ));
  };

  const targetRef = useRef();
  const LIMIT = 5;

  const getData = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?_page=${pageParam}&_limit=${LIMIT}`
    );
    return {
      data: res.data,
      nextPage: res.data.length === LIMIT ? pageParam + 1 : undefined,
    };
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['albums-infinite'],
    queryFn: getData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  const allPosts = data?.pages?.flatMap((page) => page.data) || [];

  return (
    <div className="w-[50%] m-auto overflow-y-auto border border-blue-400 p-4">
      {allPosts.map((value) => (
        <div key={value.id} className="mt-[10px]">
          <Alert message={`${value.title} (${value.id})`} className="h-[50px]" />
        </div>
      ))}

      {(isLoading || isFetchingNextPage) && skeleton()}

      <div ref={targetRef} className="h-[1px]"></div>

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          loading={isLoading || isFetchingNextPage}
          className="mt-4"
        >
          {isLoading || isFetchingNextPage ? 'Loading...' : 'More 5 products'}
        </Button>
      )}
    </div>
  );
};

export default Scroll;*/
