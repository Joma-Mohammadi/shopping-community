import data from "../data/productDetails.json";

import ProductGallery from "../productPage/ProductGallery";
import ProductEffects from "../productPage/ProductEffects";
import ProductPurchase from "../productPage/ProductPurchase";
import ProductTabs from "../productPage/ProductTabs";

import FeaturedProduct from "../productPage/FeaturedProduct"
import ProductCard from "../products/ProductCard";

export default function ProductDetails() {
  return (
    <main className="mx-auto max-w-400 px-5 py-8 sm:px-8 lg:px-10 pb-60">

      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-20">

        {/* LEFT */}
        <ProductGallery product={data} />

        {/* RIGHT */}
        <div>

          <p className="text-[11px] tracking-[0.35em] text-gray-400">
            {data.category}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#20242d] sm:text-4xl">
            {data.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[#edf4f0] px-4 py-2 text-xs text-[#075039]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">

            <div>
              <span className="text-sm text-gray-400 line-through">
                {data.oldPrice}
              </span>

              <span className="ml-3 text-lg font-semibold text-red-500">
                {data.price}
              </span>
            </div>

            <div className="text-sm">
              <span className="text-yellow-500">★</span>
              <span className="ml-2">{data.rating}</span>
              <span className="mx-3 text-gray-300">|</span>
              <span>{data.reviews}</span>
              <span className="ml-2 text-gray-400">Reviews</span>
            </div>

          </div>

          <div className="mt-6">
            <ProductEffects product={data} />
          </div>

          <div className="mt-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Description
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {data.shortDescription}
            </p>
          </div>

          <div className="mt-5">
            <ProductPurchase product={data} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-5 border-y border-gray-100 py-5 text-xs">
            <div>
              <span className="text-gray-400">SKU</span>
              <span className="ml-10">{data.sku}</span>
            </div>

            <div>
              <span className="text-gray-400">Categories</span>
              <span className="ml-5 text-green-600">
                {data.categories}
              </span>
            </div>
          </div>

          <ProductTabs product={data} />

        </div>
      </div>
      <div className="mt-10">
            <FeaturedProduct />
        </div>

       
   
    </main>
  );
}