import { Link } from "react-router-dom";
import indica from "../images/Logo (1).png";
import sativa from "../images/Logo (2).png";
import hybrids from "../images/Image.png";

// Icon
import { MdLightMode } from "react-icons/md";
const icons = {
  mdLightMode: MdLightMode,

};

const images = { "Logo (1).png": indica, "Logo (2).png": sativa, "Image.png": hybrids };

export default function StrainCard({ item }) {
  const Icon = icons[item.icon]
  return (
    <section className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      <div className="relative flex h-68 items-center justify-center rounded-xl bg-[#f3f7f5] sm:h-72">
        <img src={images[item.image]} alt={item.title} className="h-28 w-28 object-contain" />
        {Icon && (
          <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
           <Icon className="text-lg text-black"/>
          </span>
        )}
      </div>

      <h3 className="mt-8 text-3xl font-bold text-[#20242d]">{item.title}</h3>

      <p className="mt-5 text-base leading-6 text-gray-500">
        {item.description}
      </p>

      <Link to={item.link} className="mt-8 text-base font-medium text-green-600 underline underline-offset-2">
        {item.linkText}
      </Link>
    </section>
  );
}