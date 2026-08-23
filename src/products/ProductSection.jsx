import { useRef, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import productsData from "../data/products.json";
import ProductCard from "./ProductCard";
import ProductTabs from "./ProductTabs";
import FeaturedProduct from "./FeaturedProduct";

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("best-sellers");
  const sliderRef = useRef(null);

  const {
    section,
    tabs,
    featured,
    products,
  } = productsData;

  const nextSlide = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    slider.scrollBy({
      left: slider.clientWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    slider.scrollBy({
      left: -slider.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
      {/* Title */}
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold uppercase leading-[1.12] tracking-tight 
      text-[#20242d] sm:text-4xl lg:text-5xl">
        {section.title}
      </h2>

      {/* Tabs */}
      <div className="mt-6 sm:mt-10 lg:mt-12">
        <ProductTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      {/* Content */}
      <div className="mt-8 grid min-w-0 grid-cols-1 gap-8 lg:mt-12 
      lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.5fr)] xl:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.7fr)] xl:gap-10">
        {/* Featured Product */}
        <div className="min-w-0">
          <FeaturedProduct product={featured} />
        </div>

        {/* Products Slider */}
        <div className="relative min-w-0">
          <div
            ref={sliderRef}
            className="flex min-w-0 gap-[clamp(16px,2vw,32px)]
             overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 
             [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[clamp(220px,30vw,360px)] shrink-0 snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous products"
            className="absolute left-0 top-1/2 z-30 flex h-9 w-9 -translate-x-1/2 
            -translate-y-1/2 items-center justify-center rounded-full bg-white
             text-[#4b4f54] shadow-[0_3px_12px_rgba(0,0,0,0.12)] transition hover:scale-105 sm:h-10 sm:w-10"
          >
            <FaChevronLeft size={12} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next products"
            className="absolute right-0 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 
            translate-x-1/2 items-center justify-center rounded-full bg-white
             text-[#4b4f54] shadow-[0_3px_12px_rgba(0,0,0,0.12)] transition hover:scale-105 sm:h-10 sm:w-10"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}