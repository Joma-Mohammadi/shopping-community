import Button from "../components/Button";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

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

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const image = productImages[product.image];

  return (
    <section className="group min-w-0">
      {/* IMAGE */}
      <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-xl bg-[#F4F4F4]">
        {product.badge && (
          <span className="absolute left-0 top-0 z-10 rounded-br-lg bg-[#f9bd16] px-3 py-2 text-xs text-white">
            {product.badge}
          </span>
        )}

        {image && (
          <Link
            to={`/product/${product.id}`}
            className="flex h-full w-full items-center justify-center"
          >
            <img
              src={image}
              alt={product.title}
              className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
            />
          </Link>
        )}

        {!product.stock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-black/40 px-6 py-3 text-xs text-white backdrop-blur">
              Out Of Stock
            </span>
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="pt-4 text-center">
        <p className="text-xs text-gray-400">
          {product.category}
        </p>

        {/* TITLE */}
        <h3 className="mt-2 min-h-12 text-sm font-medium leading-5 text-[#20242d]">
          <Link
            to={`/product/${product.id}`}
            className="transition hover:text-[#075039]"
          >
            {product.title}
          </Link>
        </h3>

        {/* RATING */}
        <div className="mt-3 text-xs">
          <span className="text-[#f4b400]">★</span>{" "}
          {product.rating}

          <span className="mx-2 text-gray-300">|</span>

          {product.reviews}{" "}
          <span className="text-gray-400">
            Reviews
          </span>
        </div>

        {/* STRAIN */}
        <span className="mt-3 inline-block rounded bg-[#edf4f0] px-3 py-1 text-xs text-[#075039]">
          {product.strain}
        </span>

        {/* PRICE */}
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

        {/* SIZES */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
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

        {/* ADD TO CART */}
        <Button
          type="button"
          onClick={() => addToCart(product)}
          className="mx-auto mt-4 h-10 w-28"
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
}