import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../products/ProductCard";

export default function ProductGrid({ products = [] }) {
  const sliderRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
      updateButtons();
    }
  }, [products]);

  const updateButtons = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    setCanPrev(slider.scrollLeft > 0);

    setCanNext(
      slider.scrollLeft + slider.clientWidth <
        slider.scrollWidth - 5
    );
  };

  const nextSlide = () => {
    if (!sliderRef.current || !canNext) return;

    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });

    setTimeout(updateButtons, 500);
  };

  const prevSlide = () => {
    if (!sliderRef.current || !canPrev) return;

    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });

    setTimeout(updateButtons, 500);
  };

  if (!products.length) {
    return (
      <div className="flex min-h-62.5 items-center justify-center">
        <p className="text-sm text-gray-400">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-w-0">

      <div
        ref={sliderRef}
        onScroll={updateButtons}
        className="
          grid
          grid-flow-col
          auto-cols-[100%]
          sm:auto-cols-[calc((100%-20px)/2)]
          lg:auto-cols-[calc((100%-40px)/3)]
          gap-5
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={prevSlide}
        disabled={!canPrev}
        aria-label="Previous products"
        className="
          absolute
          left-0
          top-1/2
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
          shadow-[0_3px_12px_rgba(0,0,0,0.12)]
          transition
          disabled:pointer-events-none
          disabled:opacity-0
          sm:h-10
          sm:w-10
        "
      >
        <FaChevronLeft size={12} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        disabled={!canNext}
        aria-label="Next products"
        className="
          absolute
          right-0
          top-1/2
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
          shadow-[0_3px_12px_rgba(0,0,0,0.12)]
          transition
          disabled:pointer-events-none
          disabled:opacity-0
          sm:h-10
          sm:w-10
        "
      >
        <FaChevronRight size={12} />
      </button>

    </div>
  );
}