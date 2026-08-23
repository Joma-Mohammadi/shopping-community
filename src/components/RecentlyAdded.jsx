import { useState } from "react";
import data from "../data/recentlyAdded.json"
import ProductCard from "../products/ProductCard"

export default function RecentlyAdded() {
  const [activeFilter, setActiveFilter] = useState("flowers");

  const filteredProducts = activeFilter === "all" ? data.products : data.products.filter((product) => product.filter === activeFilter);

  return (
    <section className="mx-auto w-full max-w-400 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <h2 className="text-4xl font-bold tracking-tight text-[#20242d] sm:text-5xl lg:text-6xl">{data.title}</h2>

      <div className="mt-12 flex flex-wrap items-center gap-4 border-b border-gray-100 pb-8">
        <span className="mr-4 text-lg font-medium text-[#20242d]">{data.filterLabel}</span>

        {data.filters.map((filter) => (
          <button key={filter.id} type="button" onClick={() => setActiveFilter(filter.id)}
           className={`rounded-full border px-5 py-2.5 text-sm transition ${activeFilter === filter.id ?
            "border-[#075039] bg-[#f3f8f5] text-[#075039]" : "border-gray-100 text-[#20242d] hover:border-gray-300"}`}>
            {filter.title}
          </button>
        ))}

        <button type="button" onClick={() => setActiveFilter("all")} 
        className="ml-auto text-sm font-medium text-green-600 underline underline-offset-2">
          {data.showAll}
        </button>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-14 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
     
    
  );
}