import { useState } from "react";
import ReviewCard from "../productPage/ReviewCard";
import data from "../data/testimonials.json";
import ReferralProgram from "../productPage/ReferralProgram";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const [showMore, setShowMore] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(data.testimonials);

  const visibleReviews = showMore ? reviews : reviews.slice(0, 2);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !review.trim()) return;

    const newReview = {
      id: Date.now(),
      name: "You",
      avatar: `avatar${(reviews.length % 3) + 1}.png`,
      rating: rating,
      text: review.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setReviews((prev) => [...prev, newReview]);
    setReview("");
    setRating(0);
    setShowMore(true);
  };

  return (
    <div className="mt-10">
      <div className="flex gap-3 border-b border-gray-100 pb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`cursor-pointer rounded-full border px-8 py-3 text-sm ${activeTab === "description" ? "border-green-700 text-green-800" : "border-gray-100"}`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`cursor-pointer rounded-full border px-8 py-3 text-sm ${activeTab === "reviews" ? "border-green-700 text-green-800" : "border-gray-100"}`}
        >
          Reviews ({reviews.length})
        </button>

        <button
          onClick={() => setActiveTab("refer")}
          className={`cursor-pointer rounded-full border px-8 py-3 text-sm ${activeTab === "refer" ? "border-green-700 text-green-800" : "border-gray-100"}`}
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
        <div className="mt-8">
          <div className="space-y-6">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {reviews.length > 2 && (
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="rounded-full border border-green-100 px-8 py-3 text-sm text-green-600"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}

          <div className="mt-8 border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-medium text-[#20242d]">Add A Review</h2>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex items-center gap-5">
                <span className="text-base text-gray-600">Your rating</span>
                <span className="text-gray-400">:</span>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setRating(index + 1)}
                      className={`cursor-pointer text-3xl leading-none ${index < rating ? "text-[#f9bd16]" : "text-gray-300"}`}
                    >
                      {index < rating ? "★" : "☆"}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-7 block text-base text-gray-600">
                Your Review <span className="text-red-500">*</span>
              </label>

              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Enter your review"
                className="mt-4 h-30 w-full resize-none rounded-xl border border-gray-100 px-5 py-5 text-sm outline-none placeholder:text-gray-300 focus:border-green-600"
              />

              <button
                type="submit"
                disabled={!rating || !review.trim()}
                className="mt-6 rounded-full bg-[#16b52a] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#13a425] disabled:cursor-not-allowed "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {activeTab === "refer" && (
        <div className="mt-8">
          <ReferralProgram />
        </div>
      )}
    </div>
  );
}