import { useState } from "react";
import data from "../data/weedEducation.json";
import EducationCard from "./EducationCard";

export default function WeedEducation() {
  const [showAll, setShowAll] = useState(false);

  const visibleArticles = showAll ? data.articles : data.articles.slice(0, 3);

  return (
    <section className="mx-auto w-full  px-5  sm:px-8 lg:px-10 pb-45 ">
      <div className="flex items-center justify-between border-b border-gray-200 ">
        <h2 className="text-3xl font-bold tracking-tight text-[#20242d] sm:text-4xl lg:text-5xl mb-8">
          {data.title}
        </h2>

        <button type="button" onClick={() => setShowAll(!showAll)} className="text-sm font-medium text-green-600 underline underline-offset-2 sm:text-base">
          {showAll ? data.showLess : data.showAll}
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {visibleArticles.map((article) => (
          <EducationCard key={article.id} article={article} readMore={data.readMore} readLess={data.readLess} />
        ))}
      </div>
    </section>
  );
}