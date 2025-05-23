import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://uzum.com/wp-content/uploads/2024/11/results-of-9-months-2024-en.webp",
  "https://kuponbazar.uz/wp-content/uploads/2024/07/kuponbazar-blog-1.png",
  "https://zira.uz/wp-content/uploads/2017/09/oila-1300x731.png",
  "https://media.licdn.com/dms/image/v2/D4D22AQEoBsGulfsGyA/feedshare-shrink_800/B4DZbT.G8MHEAs-/0/1747312997963?e=2147483647&v=beta&t=pTyUQGUc7dyNQ3KSCRQVe9Gd0meKrT5pJZgXCJEpQHY",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-purple-100 py-6 rounded-xl relative">
      <div className="w-[1200px] m-auto relative overflow-hidden rounded-xl">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[600px] object-cover rounded-xl transition-all duration-500"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
