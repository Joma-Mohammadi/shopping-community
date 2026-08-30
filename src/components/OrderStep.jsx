import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon3.png";
import icon4 from "../icons/icon4.png";

const icons = {
  "icon1.png": icon1,
  "icon2.png": icon2,
  "icon3.png": icon3,
  "icon.png": icon4,
};

export default function OrderStep({ step }) {
  return (
    <article
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        text-center
      "
    >
      {/* Number + Icon */}
      <div className="relative flex w-fit items-center justify-center">

        {/* Number */}
        <span
          className="
            absolute
            -left-8
            top-0
            flex
            h-6
            w-6
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            bg-[#f9bd16]
            text-[9px]
            font-bold
            text-[#001b15]

            sm:h-7
            sm:w-7
            sm:text-xs
          "
        >
          {step.id}
        </span>

        {/* Icon */}
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center

            sm:h-24
            sm:w-24
          "
        >
          <img
            src={icons[step.icon]}
            alt={step.title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          text-[12px]
          font-semibold
          text-white
          sm:mt-5
          sm:text-base
        "
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-3
          max-w-105
          text-sm
          leading-[1.8]
          text-gray-300
          sm:mt-4
          sm:text-[15px]
          sm:leading-6
        "
      >
        {step.description}
      </p>
    </article>
  );
}