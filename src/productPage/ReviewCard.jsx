import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";

const avatars = {
  "avatar1.png": avatar1,
  "avatar2.png": avatar2,
  "avatar3.png": avatar3,
};

export default function ReviewCard({ review }) {
  return (
    <article className="w-full rounded-2xl border border-[#eeeeee] bg-white px-7 py-7 sm:px-8 sm:py-8">
      <div className="flex items-center gap-4">
        <img src={avatars[review.avatar]} alt={review.name} className="h-11 w-11 shrink-0 rounded-full object-cover" />
        <h3 className="text-lg font-medium text-[#20242d]">{review.name}</h3>
        <span className="h-5 w-px bg-[#eeeeee]" />
        <span className="text-base text-[#a5a5aa]">{review.date}</span>
      </div>

      <div className="mt-6 h-px w-full bg-[#eeeeee]" />

      <div className="mt-6 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`text-2xl leading-none ${index < review.rating ? "text-[#f9bd16]" : "text-[#eeeeee]"}`}>
            ★
          </span>
        ))}
      </div>

      <p className="mt-6 text-lg leading-8 text-[#20242d]">{review.text}</p>
    </article>
  );
}