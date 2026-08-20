
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";

const productImages = {

  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
  "product5.png": product5,
  "product6.png": product6,
};


export default function ProductCard({ product }) {
  return (
    <article className="group min-w-0">

      {/* Product Image */}

      <div
        className="
    relative
    h-37.5
    overflow-hidden
    rounded-xl
    bg-[#f5f5f5]

    sm:h-70
    lg:h-80
  "
      >

        {/* Badge */}

        {product.badge && (
          <span className="absolute left-0 top-0 z-20 rounded-br-lg bg-[#f9bd16] px-4 py-2 text-sm font-semibold text-white">
            {product.badge}
          </span>
        )}

        {/* Product Image */}

        <img
          src={productImages[product.image]}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />

        {/* Glass Out Of Stock */}
        {product.image === "product3.png" && (
          <div className=" absolute inset-0 z-30 flex items-center justify-center ">
            <span  className=" flex min-w-37.5 items-center justify-center rounded-full   px-7 py-4 text-smfont-semibold
           text-white bg-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-saturate-170 ">
              Out Of Stock
            </span>
          </div>
        )}

      </div>


      {/* Product Info */}

      <div className="px-1 pt-6 text-center">

        <p className="text-xs font-medium text-gray-400 sm:text-sm">
          {product.category}
        </p>

        <h3 className="mt-3 min-h-13 text-base font-medium leading-6 text-[#20242d] sm:text-lg">
          {product.title}
        </h3>


        {/* Rating */}

        <div className="mt-3 flex items-center justify-center gap-2 text-sm">

          <span className="text-yellow-500">
            ★
          </span>

          <span className="font-medium">
            {product.rating}
          </span>

          <span className="text-gray-400">
            |
          </span>

          <span className="font-medium">
            {product.reviews}
          </span>

          <span className="text-gray-400">
            Reviews
          </span>

        </div>


        {/* Strain */}

        <div className="mt-3 inline-block rounded bg-[#edf4f0] px-3 py-1 text-xs text-[#075039]">
          {product.strain}
        </div>


        {/* Price */}

        <div className="mt-5 flex items-center justify-center gap-2">

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}

          <span className="text-lg font-medium text-red-500">
            {product.price}
          </span>

          {product.priceUnit && (
            <span className="text-sm text-gray-400">
              {product.priceUnit}
            </span>
          )}

        </div>


        {/* Sizes */}

        <div className="mt-5 flex justify-center gap-2">

          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              className="rounded border border-gray-100 px-3 py-2 text-xs text-gray-700 transition hover:border-gray-300"
            >
              {size}
            </button>
          ))}

        </div>


        {/* Add Cart */}

        <button
          type="button"
          disabled={!product.stock}
          className="mt-5 rounded-full bg-green-600 px-7 py-3 text-sm font-medium
            text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50">
          Add to Cart
        </button>

      </div>

    </article>
  );
}