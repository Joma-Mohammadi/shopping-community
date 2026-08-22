import data from "../data/whyUs.json";
import WhyUsItem from "./WhyUsItem";

export default function WhyUs() {
  return (
    <section className=" w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-18 ">
      <div className="mx-auto max-w-400 ">

        {/* Heading */}
        <div className="max-w-195">
          <h2
            className="
              text-[34px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#20242d]
              sm:text-[46px]
              lg:text-[58px]
              xl:text-[62px] ">
            {data.section.titleBefore}{" "}

            <span className="text-[#f9bd16]">
              {data.section.highlight}
            </span>

            {data.section.titleLines.map((line) => (
              <span
                key={line}
                className="block"
              >
                {line}
              </span>
            ))}
          </h2>

          <p className=" mt-7 max-w-190 text-[13px]  leading-[1.65] text-gray-500 sm:mt-8  sm:text-[15px]  lg:text-[16px] lg:leading-[1.7]">
            {data.section.description}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-14
            sm:grid-cols-2
            sm:gap-6
            lg:mt-14.5
            lg:grid-cols-3
            lg:gap-x-7
            lg:gap-y-9
          "
        >
          {data.features.map((feature) => (
            <WhyUsItem
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}