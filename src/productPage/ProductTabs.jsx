import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10">

      <div className="flex gap-3 border-b border-gray-100 pb-4">

        <button
          onClick={() => setActiveTab("description")}
          className={`rounded-full border px-8 py-3 text-sm ${
            activeTab === "description"
              ? "border-green-700 text-green-800"
              : "border-gray-100"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`rounded-full border px-8 py-3 text-sm ${
            activeTab === "reviews"
              ? "border-green-700 text-green-800"
              : "border-gray-100"
          }`}
        >
          Reviews ({product.reviewCount})
        </button>

        <button
          className="rounded-full border border-gray-100 px-8 py-3 text-sm"
        >
          Refer a Friend
        </button>

      </div>

      {activeTab === "description" && (
        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600">
          {product.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="mt-6 text-sm text-gray-600">
          Customer reviews will appear here.
        </div>
      )}

    </div>
  );
}