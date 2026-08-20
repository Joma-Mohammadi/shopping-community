import button from "../images/Button.png";
import button1 from "../images/Button (1).png";
import button2 from "../images/Button (2).png";

const icons = {
  "Button.png": button,
  "Button(1).png": button1,
  "Button(2).png": button2,
};

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <article className="flex w-full items-start gap-4 sm:gap-5 lg:gap-7">

      {/* Icon */}

      <div
        className="
          flex shrink-0 items-center justify-center
          rounded-full bg-white
          h-18 w-18
          sm:h-22.5 sm:w-22.5
          md:h-26.25 md:w-26.25
          lg:h-35.5 lg:w-35.5
        "
      >
        <img
          src={icons[icon]}
          alt={title}
          
        />
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1 pt-1">

        <h3
          className="
            font-semibold leading-tight text-[#20242d]
            text-[18px]
            sm:text-[21px]
            md:text-[24px]
            lg:text-[28px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3 text-[#70747a]
            text-[14px] leading-[1.55]
            sm:mt-4 sm:text-[15px]
            md:mt-5 md:text-[17px]
            lg:mt-7 lg:max-w-107.5
            lg:text-[20px] lg:leading-[1.4]
          "
        >
          {description}
        </p>

      </div>

    </article>
  );
}