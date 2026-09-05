import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";
import product7 from "../images/product7.png";
import product8 from "../images/product8.png";

const productImages = {
  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
  "product5.png": product5,
  "product6.png": product6,
  "product7.png": product7,
  "product8.png": product8,
};

export default function TopSellingSlider({ products = [] }) {
  const [current, setCurrent] = useState(0);
    
    if (!products.length) {
      return (
        <div className="flex min-h-62.5 items-center justify-center bg-[#F2F6F4]">
          <p className="text-sm text-gray-400">
            No products found.
          </p>
        </div>
      );
    }


  if (!products.length) return null;

  const visibleCards = 3;
  const maxSlide = Math.max(products.length - visibleCards, 0);

  const next = () => {
    setCurrent((prev) => Math.min(prev + 1, maxSlide));
  };

  const prev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="
          grid grid-flow-col
          auto-cols-[85%]
          gap-5
          transition-transform duration-500 ease-in-out
          sm:auto-cols-[48%]
          lg:auto-cols-[calc((100%-40px)/3)]
        "
        style={{
          transform:
            current === 0
              ? "translateX(0)"
              : `translateX(calc(-${current} * (33.333% + 13.333px)))`,
        }}
      >
        {products.map((product) => {
          const image = productImages[product.image];

          return (
            <div
              key={product.id}
              className="min-w-0 rounded-xl  p-3"
            >
              {/* Image */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-white">
                {product.badge && (
                  <span className="absolute left-0 top-0 z-10 rounded-br-lg bg-[#f9bd16] px-3 py-2 text-xs text-white">
                    {product.badge}
                  </span>
                )}

                {image && (
                  <img
                    src={image}
                    alt={product.title}
                    className="h-full w-auto object-contain transition duration-300 hover:scale-105"
                  />
                )}

                {!product.stock && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-black/30 px-5 py-3 text-xs text-white backdrop-blur">
                      Out Of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="pt-4 text-center">
                <p className="text-xs text-gray-400">
                  {product.category}
                </p>

                <h3 className="mt-2 min-h-12 text-sm font-medium leading-5 text-[#20242d]">
                  {product.title}
                </h3>

                <div className="mt-3 text-xs">
                  <span className="text-[#f4b400]">★</span>{" "}
                  {product.rating}

                  <span className="mx-2 text-gray-300">|</span>

                  {product.reviews}{" "}
                  <span className="text-gray-400">
                    Reviews
                  </span>
                </div>

                <span className="mt-3 inline-block rounded bg-[#edf4f0] px-3 py-1 text-xs text-[#075039]">
                  {product.strain}
                </span>

                <div className="mt-4">
                  {product.oldPrice && (
                    <span className="mr-2 text-xs text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}

                  <span className="text-sm font-medium text-red-500">
                    {product.price}
                  </span>

                  {product.priceUnit && (
                    <span className="ml-1 text-xs text-gray-400">
                      {product.priceUnit}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex justify-center gap-2">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="rounded border border-gray-100 px-2 py-1 text-[10px]"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left */}
      <button
        type="button"
        onClick={prev}
        disabled={current === 0}
        className=" absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2
          items-center justify-center rounded-full bg-white shadow-md transition">
        <FaChevronLeft size={13} />
      </button>

      {/* Right */}
      <button
        type="button"
        onClick={next}
        disabled={current === maxSlide}
        className="absolute right-0 top-1/2 z-20
        flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition">
        <FaChevronRight size={13} />
      </button>
    </div>
  );
}