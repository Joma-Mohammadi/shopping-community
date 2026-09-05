import { FaStar } from "react-icons/fa";
import Button from "../components/Button";
export default function ShopSidebar({
  categories = [],
  reviews = [],
  orderBy = [],

  selectedCategory,
  setSelectedCategory,

  price,
  setPrice,

  rating,
  setRating,

  sortBy,
  setSortBy,
}) {
  return (
    <aside className="w-full shrink-0 lg:w-67.5 ">

      <div className="border-r border-[#eeeeee] pr-7">

        {/* =========================
            FILTERS
        ========================== */}

        <div className="border-b border-[#F4F4F4] pb-5 -mt-21.5">

          <h2 className="text-[16px] font-medium text-[#20242d]">
            Filters
          </h2>

        </div>

        {/* =========================
            PRODUCT CATEGORY
        ========================== */}

        <div className="border-b border-[#F4F4F4] py-5">

          <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[1.3px] text-[#717378]">
            Product Category
          </h3>

          <div className="space-y-[11px]">

            {categories.map((category) => {

              const active =
                selectedCategory ===
                category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(
                      category.id
                    )
                  }
                  className="flex w-full items-center text-left"
                >

                  {/* RADIO */}

                  <span
                    className={`mr-3 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border ${active
                      ? "border-[#12b52b] bg-[#12b52b]"
                      : "border-[#F4F4F4] bg-white"
                      }`}
                  >
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </span>

                  {/* LABEL */}

                  <span
                    className={`text-[13px] ${active
                      ? "font-medium text-[#33353a]"
                      : "text-[#46484d]"
                      }`}
                  >
                    {category.label}
                  </span>

                  {/* DIVIDER */}

                  <span className="mx-3 h-3.5 w-px bg-[#eeeeee]" />

                  {/* COUNT */}

                  <span className="text-[12px] text-[#a5a5a5]">
                    {category.count}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

        {/* =========================
            FILTER BY PRICE
        ========================== */}

        <div className=" py-5">

          <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[1.3px] text-[#777777]">
            Filter By Price
          </h3>

          <div className="relative pt-1">

            {/* FILTER BY PRICE */}
            <div className="border-b border-[#eeeeee] py-5">
              <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[1.3px] text-[#777777]">
                Filter By Price
              </h3>

              <div className="relative pt-1">

                {/* PRICE LABELS */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[12px] font-medium text-[#222222]">
                    $0
                  </span>

                  <span className="rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[12px] font-medium text-[#222222]">
                    ${Number(price).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                {/* RANGE */}
                <div className="relative mt-2 h-5">

                  {/* LINE */}
                  <div className="absolute left-1 right-1 top-1/2 h-0.5 -translate-y-1/2 bg-[#eeeeee]" />

                  {/* BLACK ACTIVE LINE */}
                  <div
                    className="absolute left-1 top-1/2 h-0.5 -translate-y-1/2 bg-[#171717]"
                    style={{
                      width: `calc(${(price / 50000) * 100}% - 0.25rem)`,
                    }}
                  />

                  
                  <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#171717] bg-white" />

                  {/* MOVING CIRCLE */}
                  <span
                    className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#171717] bg-white"
                    style={{
                      left: `calc(${(price / 50000) * 100}% )`,
                    }}
                  />

                  {/* REAL RANGE INPUT */}
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="100"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
                  />
                </div>
              </div>

              {/* APPLY */}
              <button
                type="button"
                className="mt-5 rounded-full bg-[#10b52b] px-9 py-3 text-[12px] font-medium text-white transition hover:bg-[#0ca525]"
              >
                Apply
              </button>
            </div>

          
          </div>
        </div>

        {/* =========================
            ORDER BY
        ========================== */}

        <div className=" py-5">

          <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[1.3px] text-[#777777]">
            Order By
          </h3>

          <div className="space-y-[11px]">
            {orderBy.map((option) => {
              const active =
                sortBy === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    setSortBy(option.id)
                  }
                  className="flex w-full items-center text-left"
                >

                  {/* RADIO */}

                  <span
                    className={`mr-3 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border ${active
                      ? "border-[#12b52b] bg-[#12b52b]"
                      : "border-[#e9e9e9] bg-white"
                      }`}
                  >
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </span>

                  <span className="text-[13px] text-[#46484d]">
                    {option.label}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

        {/* =========================
            FILTER BY REVIEWS
        ========================== */}

        <div className="border-b border-[#eeeeee] py-5">

          <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[1.3px] text-[#777777]">
            Filter By Reviews
          </h3>

          <div className="space-y-[11px]">

            {reviews.map((review) => {

              const active =
                rating === Number(review.id);

              const stars = String(
                review.label
              ).split("");

              return (
                <button
                  key={review.id}
                  type="button"
                  onClick={() =>
                    setRating(
                      active
                        ? 0
                        : Number(review.id)
                    )
                  }
                  className="flex w-full items-center text-left"
                >

                  {/* CHECKBOX */}

                  <span
                    className={`mr-3 flex h-4.75 w-4.75 shrink-0 items-center justify-center rounded-sm border ${active
                      ? "border-[#10b52b] bg-[#10b52b]"
                      : "border-[#eeeeee] bg-white"
                      }`}
                  >
                    {active && (
                      <span className="text-[12px] leading-none text-white">
                        ✓
                      </span>
                    )}
                  </span>

                  {/* STARS */}

                  <span className="flex items-center gap-0.5">
                    {stars.map((star, index) => (
                      <FaStar
                        key={index}
                        size={12}
                        className={
                          star === "★"
                            ? "text-[#f4b400]"
                            : "text-[#d9d9d9]"
                        }
                      />
                    ))}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

        {/* =========================
            CLEAR FILTERS
        ========================== */}

        <div className="pt-5">

          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setPrice(50000);
              setRating(0);
              setSortBy("default");
            }}
            className="rounded-full bg-[#F3FBF4] px-8 py-2.25 text-[14px] font-medium text-[#17AF26] transition hover:bg-[#e5f6e8]"
          >
            Clear Filters
          </button>

        </div>

      </div>

    </aside>
  );
}