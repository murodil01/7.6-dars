import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { Heart, ShoppingCart } from "lucide-react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(4);
  const pageSize = 4;

  const observerRef = useRef();

  const minLimit = 0;
  const maxLimit = 1000;

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=128")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const toggleCart = (id) => {
    setCartItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + pageSize);
  };

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < filteredProducts.length
        ) {
          setVisibleCount((prev) => prev + pageSize);
        }
      },
      { threshold: 1 }
    );

    const target = document.querySelector("#scroll-trigger");
    if (target) observer.observe(target);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [visibleCount, filteredProducts.length]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  return (
    <div className="max-w-[1200px] w-full m-auto mt-10 flex flex-col lg:flex-row gap-6 px-4">
      <Sidebar
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minLimit={minLimit}
        maxLimit={maxLimit}
      />

      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-lg font-semibold">
            Yuklanmoqda...
          </p>
        ) : filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-lg font-semibold">
            Tanlangan narx oralig'ida mahsulot topilmadi.
          </p>
        ) : (
          <>
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded p-4 flex flex-col items-center hover:shadow-lg transition relative"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-sm font-semibold text-center mb-2">
                  {product.title.length > 40
                    ? product.title.slice(0, 40) + "..."
                    : product.title}
                </h3>
                <p className="font-bold text-lg text-purple-700 mb-4">
                  ${product.price}
                </p>

                <div className="flex gap-6">
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="focus:outline-none"
                    aria-label="Like product"
                  >
                    <Heart
                      size={24}
                      strokeWidth={2.5}
                      className={
                        likedItems.includes(product.id)
                          ? "text-red-600"
                          : "text-gray-400"
                      }
                      fill={likedItems.includes(product.id) ? "red" : "none"}
                    />
                  </button>

                  <button
                    onClick={() => toggleCart(product.id)}
                    className="focus:outline-none"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart
                      size={24}
                      className={
                        cartItems.includes(product.id)
                          ? "text-green-600"
                          : "text-gray-400"
                      }
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>
            ))}

            <div className="col-span-full mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              {visibleCount < filteredProducts.length && (
                <button
                  onClick={loadMore}
                  className="py-2 px-4 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
                >
                  Ko'proq mahsulot
                </button>
              )}

              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setCurrentPage(num);
                        setVisibleCount(num * pageSize);
                      }}
                      className={`px-3 py-1 border rounded ${
                        currentPage === num
                          ? "bg-purple-700 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {num}
                    </button>
                  )
                )}
              </div>
            </div>

            {visibleCount < filteredProducts.length && (
              <div id="scroll-trigger" className="col-span-full h-10"></div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ProductList;
