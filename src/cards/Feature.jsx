import features from "../data/features.json";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-[#f3f7f5]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-350
          grid-cols-1
          gap-8
          px-5
          py-12

          sm:gap-9
          sm:px-7
          sm:py-14

          md:grid-cols-2
          md:gap-x-8
          md:gap-y-10
          md:px-10
          md:py-14

          lg:grid-cols-3
          lg:gap-x-8
          lg:gap-y-10
          lg:px-10
          lg:py-16

          xl:max-w-400
          xl:gap-x-10
        "
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}