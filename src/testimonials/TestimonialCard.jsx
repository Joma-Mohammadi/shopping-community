import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";

const avatars = {
  "avatar1.png": avatar1,
  "avatar2.png": avatar2,
  "avatar3.png": avatar3,
};

export default function TestimonialCard({ testimonial }) {
  return (
    <section className="relative h-130 w-[calc(100vw-56px)] max-w-80 shrink-0 snap-start rounded-2xl border border-gray-200 bg-white px-7 py-8 sm:w-90 lg:w-95">

      <div className="flex items-center gap-4">
        <img
          src={avatars[testimonial.avatar]}
          alt={testimonial.name}
          className="h-11 w-11 rounded-full object-cover"
        />

        <h3 className="text-lg font-medium text-[#20242d]">
          {testimonial.name}
        </h3>
      </div>

      <div className="mt-8 h-px w-full bg-gray-200" />

      <div className="mt-8 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-2xl leading-none ${
              index < testimonial.rating ? "text-[#f9bd16]" : "text-gray-200"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <p className="mt-7 text-lg leading-normal text-[#20242d]">
        {testimonial.text}
      </p>

      <p className="absolute bottom-8 left-8 text-base text-gray-400">
        {testimonial.date}
      </p>

    </section>
  );
}