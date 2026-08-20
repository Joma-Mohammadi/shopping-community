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

    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-8 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-350 px-2 sm:px-8 lg:px-10">

        {/* TITLE */}

        <h2
  className="
    mx-auto
    max-w-52
    text-center
    text-[21px]
    font-bold
    uppercase
    leading-[1.12]
    tracking-tight
    text-[#20242d]

    sm:max-w-170
    sm:text-4xl

    lg:max-w-200
    lg:text-[58px]
  "
>
  {section.title}
</h2>


        {/* TABS */}

        <div className="mt-5 sm:mt-12">
          <ProductTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>


        {/* CONTENT */}

        <div
          className="
            mt-6
            lg:grid
            lg:grid-cols-[378px_minmax(0,1fr)]
            lg:gap-8
            lg:mt-12
          "
        >

          {/* =========================
              FEATURED
              NO ARROWS HERE
          ========================= */}

          <div className="w-full">
            <FeaturedProduct product={featured} />
          </div>


          {/* =========================
              WHITE PRODUCT SLIDER
          ========================= */}

          <div className="relative mt-5 min-w-0 lg:mt-0">

            {/* PRODUCT VIEWPORT */}

            <div
              ref={sliderRef}
              className="
                flex
                gap-4
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory

                sm:gap-6
                lg:gap-8
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >

              {products.map((product) => (
                <div
                  key={product.id}
                  className="
                    min-w-[calc(100%-32px)]
                    basis-[calc(100%-32px)]
                    snap-start

                    sm:min-w-[calc(50%-12px)]
                    sm:basis-[calc(50%-12px)]

                    lg:min-w-[calc(33.333%-22px)]
                    lg:basis-[calc(33.333%-22px)]
                  "
                >
                  <ProductCard product={product} />
                </div>
              ))}

            </div>


            {/* =========================
                LEFT ARROW
                ONLY WHITE PRODUCTS
            ========================= */}

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous products"
              className="
                absolute
                left-0
                top-[75px]
                z-30

                flex
                h-9
                w-9
                -translate-x-1/2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full
                bg-white

                text-[#4b4f54]

                shadow-[0_3px_12px_rgba(0,0,0,0.12)]

                transition
                hover:scale-105

                sm:top-35
                sm:h-10
                sm:w-10

                lg:top-40
              "
            >
              <FaChevronLeft size={12} />
            </button>


            {/* =========================
                RIGHT ARROW
                ONLY WHITE PRODUCTS
            ========================= */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next products"
              className="
                absolute
                right-0
                top-18.75
                z-30

                flex
                h-9
                w-9
                translate-x-1/2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full
                bg-white

                text-[#4b4f54]

                shadow-[0_3px_12px_rgba(0,0,0,0.12)]

                transition
                hover:scale-105

                sm:top-35
                sm:h-10
                sm:w-10

                lg:top-40
              "
            >
              <FaChevronRight size={12} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}