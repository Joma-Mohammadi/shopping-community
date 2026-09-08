import data from "../data/strainTypes.json";
import StrainCard from "./StrainCard";

export default function StrainTypes() {
  return (
    <section className="mx-auto w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <h2 className="text-2xl font-bold tracking-tight text-[#20242d] sm:text-5xl lg:text-5xl">
        {data.title}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {data.items.map((item) => (
          <StrainCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}