"use client"
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// interface CarouselProps {
//   images: string[];
// }

const Carousel = () => {

  const images = [
    "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F6.webp&w=1200&q=75",
    "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F2.webp&w=1200&q=75",
    "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F3.webp&w=1920&q=75",
    "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F4.webp&w=1200&q=75",
    "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F5.webp&w=1200&q=75",
  ]


  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const startAutoScroll = () => {
    setAutoScrollInterval(setInterval(nextSlide, 4000));
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      setAutoScrollInterval(null);
    }
  };

  useEffect(() => {
    // Start auto-scroll when the component mounts
    startAutoScroll();

    // Stop auto-scroll when the component unmounts
    return () => stopAutoScroll();
  }, []);

  return (
    <div className="mt-32 lg:mt-56 xl:mt-32 overflow-hidden mx-2 mb-12 ">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image src={image} width={1900} height={1900} alt={`Slide ${index}`} className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-center object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute mx-3 top-[46%] md:top-[52%] lg:top-[71%] xl:top-[57%] left-2">
        <button
          onClick={prevSlide}
          className="p-2 sm:bg-white rounded-full text-white sm:text-black focus:outline-none hidden sm:block"
        >
          <FaChevronLeft size={22} />
        </button>
      </div>
      <div className="absolute mx-3 top-[46%] md:top-[52%] lg:top-[71%] xl:top-[57%] right-2">
        <button
          onClick={nextSlide}
          className="p-2 sm:bg-white rounded-full text-white sm:text-black focus:outline-none hidden sm:block"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
