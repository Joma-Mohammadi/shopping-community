import features from "../data/features.json";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-[#f3f7f5]">
      <div
        className="
          mx-auto grid w-full max-w-400
          grid-cols-1
          gap-10
          px-5 py-12

          sm:gap-12
          sm:px-7 sm:py-14

          md:grid-cols-2
          md:gap-x-8
          md:gap-y-14
          md:px-10 md:py-16

          lg:grid-cols-3
          lg:gap-10
          lg:px-10 lg:py-20
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