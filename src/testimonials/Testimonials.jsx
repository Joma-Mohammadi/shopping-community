import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsData from "../data/testimonials.json";
import FeaturedReview from "./FeaturedReview";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const sliderRef = useRef(null);

    const scrollSlider = (direction) => {
        if (!sliderRef.current) return;

        const amount = window.innerWidth < 640 ? window.innerWidth - 70 : 495;

        sliderRef.current.scrollBy({
            left: direction === "next" ? amount : -amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-10">

                <h2 className="max-w-270 text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#20242d] sm:text-5xl lg:text-[60px]">
                    {testimonialsData.section.title}
                </h2>

                <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:gap-10">

                    <FeaturedReview featured={testimonialsData.featured} />

                    <div className="relative min-w-0 flex-1">

                        <div
                            ref={sliderRef}
                            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {testimonialsData.testimonials.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => scrollSlider("prev")}
                            aria-label="Previous testimonials"
                            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-500 shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition hover:text-[#075039]"
                        >
                            <FaChevronLeft size={14} />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollSlider("next")}
                            aria-label="Next testimonials"
                            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-500 shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition hover:text-[#075039]"
                        >
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}