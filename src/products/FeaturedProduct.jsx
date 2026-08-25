import product1 from "../images/product1.png";
import { Link } from "react-router-dom";

const featuredImages = {
  "product1.png": product1,
};

export default function FeaturedProduct({ product }) {
  return (
    <section className="relative flex h-160 w-full flex-col items-center justify-end 
    overflow-hidden rounded-2xl bg-[#075039] px-5 py-8  text-center sm:px-7 sm:py-15">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 ">
        <div className="absolute -right-16 -top-16 h-[clamp(180px,20vw,288px)] 
        w-[clamp(180px,20vw,288px)] rotate-12 bg-[#38745f]" />
        <div className="absolute -bottom-16 -left-16 h-[clamp(180px,20vw,288px)] 
        w-[clamp(180px,20vw,288px)] -rotate-12 bg-[#38745f]" />
      </div>

      {/* Featured Image */}
      <div className="relative z-10 flex w-full flex-1 items-center justify-center pb-6 sm:pb-3">
        <img
          src={featuredImages[product.image]}
          alt={product.title}
          className="h-80 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-6 px-15 sm:20">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {product.title}
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/70">
          {product.description}
        </p>

        <Link
          to={product.link}
          className="mt-5 inline-block text-sm font-medium text-green-400 underline"
        >
          View All
        </Link>
      </div>
    </section>
  );
}