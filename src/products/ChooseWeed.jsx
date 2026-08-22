import { useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";

const filters = [
  { id: "flower", title: "Flowers" },
  { id: "mushrooms", title: "Mushrooms" },
  { id: "concentrate", title: "Concentrate" },
  { id: "edibles", title: "Edibles" },
  { id: "all", title: "Shop All Weed" },
];

export default function ChooseWeed() {
  const [activeFilter, setActiveFilter] = useState("flower");

  const products = productsData.products || [];

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;

    const category = product.category?.toLowerCase();

    if (activeFilter === "flower") return category === "flower";
    if (activeFilter === "concentrate") return category === "concentrates";
    if (activeFilter === "mushrooms") return category === "mushrooms";
    if (activeFilter === "edibles") return category === "edibles";

    return true;
  });

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto  pb-28 lg:pb-25">
        {/* Title */}
        <h2 className="text-[28px]  font-extrabold tracking-[-0.03em] text-[#20242d] sm:text-[34px] lg:text-[38px]">
          CHOOSE YOUR WEED
        </h2>

        {/* Filters */}
        <div className="mt-7 flex flex-wrap items-center gap-2 border-b border-[#eeeeee] pb-5 sm:mt-8 sm:gap-3">
          <span className="mr-1 whitespace-nowrap text-[12px] font-medium text-[#20242d] sm:mr-3 sm:text-[13px]">
            Filter by Interest
          </span>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-3.5 py-1.5 text-[10px] transition-all duration-200 sm:px-4 sm:text-[11px] ${
                  activeFilter === filter.id
                    ? "border-[#075039] bg-[#f3f8f5] text-[#075039]"
                    : "border-[#eeeeee] bg-white text-[#20242d] hover:border-[#cfcfcf]"
                }`}
              >
                {filter.title}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div
            className="
              mt-7
              grid
              grid-cols-2
              gap-x-3
              gap-y-8
              sm:mt-8
              sm:grid-cols-3
              sm:gap-x-5
              sm:gap-y-9
              lg:grid-cols-4
              lg:gap-x-6
              lg:gap-y-10
            "
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-sm text-gray-400">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
}