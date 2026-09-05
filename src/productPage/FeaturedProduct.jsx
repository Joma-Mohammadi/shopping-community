import data from "../data/recentlyAdded.json";
import ProductCard from "../products/ProductCard";

export default function FeaturedProduct() {
  const featuredProducts = data.products
    .filter((product) => [1, 2, 3, 4].includes(product.id))
    .map((product) => ({
      ...product,
      stock: product.id < 3,
    }));

  return (
    <section className="mx-auto w-full  border-t border-gray-200 px-5 py-12 sm:px-8 lg:px-10">
      <h2 className="mb-10 text-2xl font-bold text-[#20242d]">
        Featured Product
      </h2>

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}