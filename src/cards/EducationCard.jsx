import { useState } from "react";
import { Link } from "react-router-dom";
import education from "../images/education.png";
import education1 from "../images/education1.png";
import education2 from "../images/education2.png";
import education3 from "../images/education3.png";
import education4 from "../images/education4.png";
import education5 from "../images/education5.png";

const images = { "education.png": education, "education1.png": education1, "education2.png": education2, "education3.png": education3, "education4.png": education4, "education5.png": education5 };

export default function EducationCard({ article, readMore, readLess }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex flex-col">
      <img src={images[article.image]} alt={article.title} className="h-55 w-full rounded-xl object-cover sm:h-64 lg:h-68" />

      <p className="mt-6 text-sm text-gray-500">{article.date}</p>

      <h3 className="mt-4 text-2xl font-semibold leading-8 text-[#20242d]">
        {article.title}
      </h3>

      <div className="mt-3 text-base leading-6 text-gray-500">
        <p>{article.excerpt}</p>

        {expanded && (
          <p className="mt-3">
            {article.content}
          </p>
        )}
      </div>

      <button type="button" onClick={() => setExpanded(!expanded)} className="mt-6 w-fit text-base font-medium text-green-600 underline underline-offset-2">
        {expanded ? readLess : readMore}
      </button>
    </section>
  );
}