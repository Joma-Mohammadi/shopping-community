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
    <section
      className="
        grid
        w-full
        grid-cols-[48px_1fr]
        items-start
        gap-3

        sm:grid-cols-[58px_1fr]
        sm:gap-4

        md:grid-cols-[64px_1fr]
        md:gap-4

        lg:grid-cols-[76px_1fr]
        lg:gap-5
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white

          sm:h-14
          sm:w-14

          md:h-16
          md:w-16

          lg:h-19
          lg:w-19
        "
      >
        <img
          src={icons[icon]}
          alt={title}
          className="
            h-auto
            w-7
            object-contain

            sm:w-8

            md:w-9

            lg:w-10
          "
        />
      </div>

      {/* Content */}
      <div className="min-w-0 pt-0.5">
        <h3
          className="
            text-[16px]
            font-semibold
            leading-tight
            text-[#20242d]

            sm:text-[18px]

            md:text-[20px]

            lg:text-[22px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[12px]
            leading-[1.5]
            text-[#70747a]

            sm:mt-2.5
            sm:text-[13px]

            md:mt-3
            md:text-[14px]

            lg:mt-4
            lg:max-w-90
            lg:text-[16px]
            lg:leading-[1.45]
          "
        >
          {description}
        </p>
      </div>
    </section>
  );
}