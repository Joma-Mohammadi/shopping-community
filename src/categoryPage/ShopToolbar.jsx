export default function ShopToolbar({
  count,
  orderBy,
  setOrderBy,
}) {
  return (
    <div className="mb-5 flex items-center justify-between border-b border-[#eeeeee] pb-5">
      <div>
        <h1 className="text-[20px] font-medium text-[#17191d]">
          Shop
        </h1>

        <p className="mt-1 text-[11px] text-[#99999d]">
          {count} Products
        </p>
      </div>

      <select
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
        className="rounded-full border border-[#eeeeee] bg-white px-4 py-2.5 text-[11px] outline-none"
      >
        <option value="default">Sort By Latest</option>
        <option value="reviews">Review Count</option>
        <option value="rating">Average Rating</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="name">Product Name</option>
      </select>
    </div>
  );
}