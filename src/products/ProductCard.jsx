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
  return (
    <section className="group min-w-0 w-full">
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
        {/* Badge */}
        {product.badge && (
          <span className="absolute left-0 top-0 z-20 rounded-br-lg bg-[#f9bd16] px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <img
          src={productImages[product.image]}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Out Of Stock */}
        {product.image === "product3.png" && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <span className="flex items-center justify-center rounded-full bg-white/50 px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-saturate-170 sm:px-7 sm:py-4 sm:text-sm">
              Out Of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="px-1 pt-5 text-center sm:pt-6">
        <p className="text-xs font-medium text-gray-400 sm:text-sm">
          {product.category}
        </p>

        <h3 className="mt-2 min-h-12 text-sm font-medium leading-6 text-[#20242d] sm:mt-3 sm:min-h-13 sm:text-lg">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
          <span className="text-yellow-500">★</span>

          <span className="font-medium">
            {product.rating}
          </span>

          <span className="text-gray-400">|</span>

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
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}

          <span className="text-base font-medium text-red-500 sm:text-lg">
            {product.price}
          </span>

          {product.priceUnit && (
            <span className="text-xs text-gray-400 sm:text-sm">
              {product.priceUnit}
            </span>
          )}
        </div>

        {/* Sizes */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              className="rounded border border-gray-100 px-2.5 py-1.5 text-xs text-gray-700 transition hover:border-gray-300 sm:px-3 sm:py-2"
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add Cart */}
        <button
          type="button"
          disabled={!product.stock}
          className="mt-4 rounded-full bg-green-600 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-5 sm:px-7 sm:py-3 sm:text-sm"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}