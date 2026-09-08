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
    <section className="group flex h-full min-w-0 flex-col">
      {/* IMAGE */}
      <div
        className="
          relative flex
          h-45
          w-full
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          bg-[#F4F4F4]
          sm:h-60
          md:h-70
          lg:h-75
          xl:h-80
        "
      >
        {product.badge && (
          <span
            className="
              absolute left-0 top-0 z-10
              rounded-br-lg
              bg-[#f9bd16]
              px-2 py-1.5
              text-[9px] text-white
              sm:px-3 sm:py-2 sm:text-xs
            "
          >
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
              className="
                h-full
                max-w-full
                object-contain
                transition
                duration-300
                group-hover:scale-105
              "
            />
          </Link>
        )}

        {!product.stock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="
                rounded-full
                bg-black/40
                px-3 py-2
                text-[9px]
                text-white
                backdrop-blur
                sm:px-6 sm:py-3 sm:text-xs
              "
            >
              Out Of Stock
            </span>
          </div>
        )}
      </div>

      {/* INFO */}
      <div
        className="
          flex
          flex-1
          flex-col
          pt-3
          text-center
          sm:pt-4
        "
      >
        {/* CATEGORY */}
        <p className="truncate text-[10px] text-gray-400 sm:text-xs">
          {product.category}
        </p>

        {/* TITLE */}
        <h3
          className="
            mt-1
            line-clamp-2
            min-h-8.5
            text-[11px]
            font-medium
            leading-4
            text-[#20242d]
            sm:mt-2
            sm:min-h-10
            sm:text-sm
            sm:leading-5
          "
        >
          <Link
            to={`/product/${product.id}`}
            className="transition hover:text-[#075039]"
          >
            {product.title}
          </Link>
        </h3>

        {/* RATING */}
        <div className="mt-2 whitespace-nowrap text-[9px] sm:mt-3 sm:text-xs">
          <span className="text-[#f4b400]">★</span>{" "}
          {product.rating}

          <span className="mx-1 text-gray-300 sm:mx-2">|</span>

          {product.reviews}{" "}
          <span className="text-gray-400">
            Reviews
          </span>
        </div>

        {/* STRAIN */}
        <div className="mt-2 flex h-6 items-center justify-center sm:mt-3 sm:h-7">
          {product.strain && (
            <span
              className="
                max-w-full
                truncate
                rounded
                bg-[#edf4f0]
                px-2
                py-1
                text-[9px]
                text-[#075039]
                sm:px-3
                sm:text-xs
              "
            >
              {product.strain}
            </span>
          )}
        </div>

        {/* PRICE */}
        <div className="mt-2 min-h-5 sm:mt-4">
          {product.oldPrice && (
            <span className="mr-1 text-[9px] text-gray-400 line-through sm:mr-2 sm:text-xs">
              {product.oldPrice}
            </span>
          )}

          <span className="text-[11px] font-medium text-red-500 sm:text-sm">
            {product.price}
          </span>

          {product.priceUnit && (
            <span className="ml-1 text-[9px] text-gray-400 sm:text-xs">
              {product.priceUnit}
            </span>
          )}
        </div>

        {/* SIZES */}
        <div
          className="
            mt-2
            flex
            min-h-7
            flex-wrap
            items-center
            justify-center
            gap-1
            sm:mt-4
            sm:gap-2
          "
        >
          {product.sizes?.map((size) => (
            <button
              key={size}
              type="button"
              className="
                rounded
                border
                border-gray-200
                px-1.5
                py-0.5
                text-[8px]
                leading-3
                transition
                hover:border-[#075039]
                hover:text-[#075039]
                sm:px-2
                sm:py-1
                sm:text-[10px]
              "
            >
              {size}
            </button>
          ))}
        </div>

        {/* ADD TO CART */}
        <div className="mt-auto pt-3 sm:pt-4">
          <Button
            type="button"
            onClick={() => addToCart(product)}
            className="
              mx-auto
              h-8
              w-full
              max-w-26.25
              rounded-full
              px-2
              text-[9px]
              sm:h-10
              sm:max-w-31.25
              sm:text-xs
            "
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}