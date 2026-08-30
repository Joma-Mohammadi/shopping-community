import Icon from "../icons/Icon.png"
import Icon1 from "../icons/Icon (1).png";
import Icon2 from "../icons/Icon (2).png";
import Icon3 from "../icons/Icon (3).png";
import Icon4 from "../icons/Icon (4).png";
import Icon5 from "../icons/Icon (5).png";

const icons = {
  support: Icon,
  security: Icon1,
  value: Icon2,
  delivery: Icon3,
  quality: Icon4,
  trust: Icon5,
};

export default function WhyUsItem({ feature }) {
  const featureIcon = icons[feature.icon];

  return (
    <section className=" flex min-h-82.5 flex-col rounded-[10px] border border-[#e5e7e9] bg-white
        px-7 py-9 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]
        sm:min-h-86.25 sm:px-8 sm:py-10 lg:min-h-87 lg:px-7.25 lg:py-10">
      {/* Icon */}
      <div className="flex h-16.25 items-start">
        {featureIcon && (
          <img
            src={featureIcon}
            alt={feature.title}
            className=" h-14 w-14 object-contain  sm:h-15 sm:w-15 "/>
        )}
      </div>

      {/* Title */}
      <h3 className=" text-[19px] font-bold leading-tight tracking-[-0.02em] text-[#20242d] sm:text-[21px] ">
        {feature.title}
      </h3>

      {/* Description */}
      <p className=" mt-5 max-w-82.5 text-[14px] leading-[1.48] text-[#737780] sm:text-[14px] sm:leading-normal ">
        {feature.description}
      </p>
    </section>
  );
}