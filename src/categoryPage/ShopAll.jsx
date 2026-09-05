import { useState } from "react";
import shippingIcon from "../images/Button.png";
import safeIcon from "../images/Button (1).png";
import qualityIcon from "../images/Button (2).png";

import productsData from "../data/products.json";
import shopFilters from "../data/shopFilters.json";

import ProductGrid from "./ProductGrid";
import ShopSidebar from "./ShopSidebar";
import TopSellingSlider from "./TopSellingSlider";
import CategoryProduct from "../categoryPage/CategoryProduct"

import {
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";

export default function ShopAll() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [price, setPrice] = useState(50000);
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);



  const products = productsData.products || [];
  const categories = shopFilters.categories || [];
  const orderBy = shopFilters.orderBy || [];
  const reviews = shopFilters.reviews || [];

  const getPrice = (value) => {
    return Number(String(value).replace(/[^0-9.]/g, "")) || 0;
  };

  const getRating = (value) => {
    return Number(String(value).split("/")[0]) || 0;
  };

  let filteredProducts = [...products];

  // Category
  if (selectedCategory !== "All") {
    const category = categories.find(
      (item) => item.id === selectedCategory
    );

    if (category) {
      const categoryName = category.label.toLowerCase();

      filteredProducts = filteredProducts.filter((product) => {
        const productCategory = product.category.toLowerCase();

        if (
          category.id === "cannabis" &&
          productCategory === "flower"
        ) {
          return true;
        }

        if (
          category.id === "extracts" &&
          productCategory === "concentrates"
        ) {
          return true;
        }

        if (
          category.id === "magic-mushrooms" &&
          productCategory === "mushrooms"
        ) {
          return true;
        }

        return productCategory === categoryName;
      });
    }
  }

  // Price
  filteredProducts = filteredProducts.filter(
    (product) => getPrice(product.price) <= price
  );

  // Rating
  if (rating > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => getRating(product.rating) >= rating
    );
  }

  // Sort
  if (sortBy === "low-high") {
    filteredProducts.sort(
      (a, b) => getPrice(a.price) - getPrice(b.price)
    );
  }

  if (sortBy === "high-low") {
    filteredProducts.sort(
      (a, b) => getPrice(b.price) - getPrice(a.price)
    );
  }

  if (sortBy === "rating") {
    filteredProducts.sort(
      (a, b) => getRating(b.rating) - getRating(a.rating)
    );
  }

  if (sortBy === "reviews") {
    filteredProducts.sort(
      (a, b) => b.reviews - a.reviews
    );
  }

  if (sortBy === "name") {
    filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  

  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory
  );

  const categoryTitle =
    selectedCategoryData?.label || "Cannabis";

  return (
    <main className="min-h-screen bg-white pb-50">
      {/* Features */}
      <div className="mb-8 grid grid-cols-1 bg-[#F1F5F3] sm:grid-cols-3">

        <div className="flex items-center gap-4 px-6 py-7 sm:justify-center sm:border-r sm:border-[#CBD5D1]">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
            <img
              src={shippingIcon}
              alt="Reliable Shipping"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-[#20242d]">
            Reliable Shipping
          </h3>
        </div>

        <div className="flex items-center gap-4 px-6 py-7 sm:justify-center sm:border-r sm:border-[#CBD5D1]">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
            <img
              src={safeIcon}
              alt="You’re Safe With Us"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-[#20242d]">
            You’re Safe With Us
          </h3>
        </div>

        <div className="flex items-center gap-4 px-6 py-7 sm:justify-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
            <img
              src={qualityIcon}
              alt="Best Quality & Pricing"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-[#20242d]">
            Best Quality & Pricing
          </h3>
        </div>

      </div>
      <div className="mx-auto max-w-400 overflow-x-hidden px-4 py-7 sm:px-7 lg:px-8">

        {/* Header */}
        <div className="w-full max-w-260 lg:ml-74 border-b border-[#F4F4F4] pb-5">
          <div className="flex items-center justify-between">

            <h1 className="text-[25px] font-medium text-[#181b20]">
              Shop
            </h1>

            <div className="flex items-center gap-2">
              {/* Filter */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-full border border-[#F4F4F4] px-4 py-2.5 text-sm lg:hidden">
                Filter
                {showFilters ? (
                  <FaChevronUp size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-10 appearance-none rounded-full border border-[#F4F4F4] bg-white px-4 pr-8 text-sm"
                >
                  {orderBy.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <FaChevronDown
                  size={9}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#999]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-9">

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-64 lg:shrink-0">
            <ShopSidebar
              categories={categories}
              reviews={reviews}
              orderBy={orderBy}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              price={price}
              setPrice={setPrice}
              rating={rating}
              setRating={setRating}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          {/* Content */}
          <section className="min-w-0 flex-1">

            {/* Category title */}
            <div className="mb-7">
              <h2 className="text-[18px] font-medium text-[#0dae28]">
                {categoryTitle}
              </h2>

              <p className="mt-3 max-w-262.5 text-sm leading-[1.55] text-[#70727a]">
                Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid,
                and Sativa medical cannabis strain selections at the best prices online. You can be
                assured that all our strains go through a strict screening process to ensure that all
                your cannabis needs are top-quality. All of our flowers are sourced from reputable growers,
                based in British Columbia, Canada. We have hige grade selection comes from growers that
                produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis
                industry. You are guaranteed to
                be receiving high-quality flowers at the best prices online with our unbeatable sales!
              </p>
            </div>

            {/* Top Selling */}
            <div className="rounded-2xl bg-[#F2F6F4] p-5 sm:p-7">
              <h2 className="mb-6 text-[21px] font-mediumt text-[#17191d]">
                Top Selling
              </h2>

              <TopSellingSlider products={filteredProducts} />
            </div>

            {/* All Products */}
            <div className="mt-10">
              <ProductGrid products={filteredProducts} />
            </div>

            {/* Featured Product */}

            <div className="mt-10">
              <CategoryProduct products={filteredProducts} />
            </div>

            {/* after  Featured Product cards*/}
            <div className="mt-14">
              <ProductGrid products={filteredProducts} />
            </div>
          </section>
        </div>



      </div>

      {/* Mobile Filter */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">

          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowFilters(false)}
          />

          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-5">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-medium">
                Filter
              </h2>

              <button
                onClick={() => setShowFilters(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5]"
              >
                <FaTimes size={13} />
              </button>
            </div>

            <ShopSidebar
              categories={categories}
              reviews={reviews}
              orderBy={orderBy}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              price={price}
              setPrice={setPrice}
              rating={rating}
              setRating={setRating}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <button
              onClick={() => setShowFilters(false)}
              className="mt-5 w-full rounded-full bg-[#0dae28] py-3 text-white"
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </main>
  );
}