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
    <section
      className=" w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16 xl:py-20 ">
      {/* TITLE */}
      <h2
        className="  mx-auto max-w-3xl px-4 text-center text-2xl
          font-bold uppercase leading-[1.12] tracking-tight text-[#20242d] sm:px-0 sm:text-4xl lg:text-5xl">
        {section.title}
      </h2>

      {/* TABS */}
      <div className="mt-6 sm:mt-10 lg:mt-12">
        <ProductTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      {/* CONTENT */}
      <div
        className=" mt-8 grid min-w-0 grid-cols-1 gap-8 px-4 sm:px-6
          lg:mt-12 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.5fr)] lg:px-8 xl:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.7fr)] xl:gap-10 xl:px-10 ">
        {/* FEATURED */}
        <div className="min-w-0">
          <FeaturedProduct product={featured} />
        </div>

        {/* PRODUCTS SLIDER */}
        <div className="relative min-w-0">
          <div
            ref={sliderRef}
            className=" flex min-w-0 gap-3 overflow-x-auto scroll-smooth snap-x
              snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-6 xl:gap-8 ">
            {products.map((product) => (
              <div
                key={product.id}
                className=" w-[calc((100vw-44px)/2)] min-w-0 shrink-0 snap-start  sm:w-65 md:w-70lg:w-70 xl:w-[320px] ">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous products"
            className=" absolute left-0 top-1/2 z-30 flex h-7 w-7 -translate-x-1/3 -translate-y-1/2 items-center
              justify-center rounded-full bg-white text-[#4b4f54] shadow-[0_3px_12px_rgba(0,0,0,0.12)] transition hover:scale-105 sm:h-9 sm:w-9 sm:-translate-x-1/2">
            <FaChevronLeft size={10} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next products"
            className=" absolute right-0 top-1/2 z-30 flex h-7 w-7 translate-x-1/3 -translate-y-1/2 items-center justify-center
              rounded-full bg-white text-[#4b4f54] shadow-[0_3px_12px_rgba(0,0,0,0.12)] transition  hover:scale-105 sm:h-9 sm:w-9 sm:translate-x-1/2">
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>
    </section>
  );
}