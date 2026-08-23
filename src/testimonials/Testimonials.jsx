import { useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import testimonialsData from "../data/testimonials.json";
import FeaturedReview from "./FeaturedReview";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.firstElementChild;

    if (!card) return;

    const amount = card.getBoundingClientRect().width + 24;

    slider.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <h2 className="max-w-5xl text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#20242d] sm:text-5xl lg:text-5xl">
        {testimonialsData.section.title}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
        
        <FeaturedReview featured={testimonialsData.featured} />

        <div className="relative min-w-0">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonialsData.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={() => scrollSlider("prev")}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-500 shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition hover:text-[#075039]"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => scrollSlider("next")}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-500 shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition hover:text-[#075039]"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}