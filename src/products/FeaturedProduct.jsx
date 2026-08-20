import product1 from "../images/product1.png";

const featuredImages = {
  "product1.png": product1,
};

export default function FeaturedProduct({ product }) {
  return (
    <article className="relative flex h-full min-h-130 flex-col items-center justify-end overflow-hidden rounded-2xl bg-[#075039] px-6 py-10 text-center">

      {/* Background */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rotate-12 bg-[#38745f]" />

        <div className="absolute -left-20 bottom-0 h-72 w-72 -rotate-12 bg-[#38745f]" />
      </div>


      {/* Featured Image */}

      <img
        src={featuredImages[product.image]}
        alt={product.title}
        className="
          relative
          z-10
          h-65
          w-full
          object-contain
        "
      />


      {/* Content */}

      <div className="relative z-10">

        <h3 className="text-2xl font-semibold text-white">
          {product.title}
        </h3>

        <p className="mx-auto mt-4 max-w-75 text-sm leading-6 text-white/70">
          {product.description}
        </p>

        <a
          href={product.link}
          className="
            mt-6
            inline-block
            text-sm
            font-medium
            text-green-400
            underline
          "
        >
          View All
        </a>

      </div>

    </article>
  );
}