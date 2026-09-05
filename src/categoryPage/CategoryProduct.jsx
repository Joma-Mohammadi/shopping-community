import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useCart } from "../context/CartContext";

import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";
import product7 from "../images/product7.png";
import product8 from "../images/product8.png";

import Button from "../components/Button";

const productImages = {
  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
  "product5.png": product5,
  "product6.png": product6,
  "product7.png": product7,
  "product8.png": product8,
};

export default function FeaturedProduct({ products = [] }) {
  const [current, setCurrent] = useState(0);
  const { addToCart } = useCart();

  if (!products.length) return null;

  const product = products[current];
  const image = productImages[product.image];

  const next = () => {
    setCurrent((prev) =>
      prev < products.length - 1 ? prev + 1 : prev
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <section className="overflow-hidden rounded-3xl 
    bg-[radial-gradient(circle_at_20%_20%,#648A7C_0%,#05422C_70%)] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

        {/* LEFT */}
        <div className="min-w-0">

          <p className="text-xs tracking-[0.3em] text-white/40">
            {product.category}
          </p>

          <h2 className="mt-6 max-w-xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-3 text-sm">
            <span className="text-xl text-[#f9bd16]">
              ★
            </span>

            <span className="text-white">
              {product.rating}
            </span>

            <span className="text-white/30">
              |
            </span>

            <span className="text-white">
              {product.reviews}
            </span>

            <span className="text-white/50">
              Reviews
            </span>
          </div>

          {/* Sizes */}
          <div className="mt-8 flex flex-wrap gap-2">
            {product.sizes?.map((size) => (
              <button
                key={size}
                type="button"
                className="rounded-md border border-white/20 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Price + Cart */}
          <div className="mt-10 flex flex-wrap items-center gap-6">

            <Button
              type="button"
              onClick={() => addToCart(product)}
              className="mb-9"
            >
              Add to Cart
            </Button>

            <div className="flex items-center gap-3">

              <span className="text-2xl font-medium text-[#f9bd16]">
                {product.price}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-white/50 line-through">
                  {product.oldPrice}
                </span>
              )}

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative min-w-0">

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-white/10 p-8">

            {image && (
              <img
                src={image}
                alt={product.title}
                className="h-full max-h-80 w-auto object-contain transition-transform duration-500"
              />
            )}

          </div>

          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous product"
            className="absolute left-0 top-1/2 z-20
              flex h-10 w-10  -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white
              text-[#28664f] shadow-md  transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 ">
            <FaChevronLeft size={13} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={next}
            disabled={current === products.length - 1}
            aria-label="Next product"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center
               rounded-full bg-white text-[#28664f] shadow-md transition  hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 ">
            <FaChevronRight size={13} />
          </button>

          {/* DOTS */}
          <div className="mt-5 flex justify-center gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full ${
                  current === index
                    ? "bg-white"
                    : "bg-white/25"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}