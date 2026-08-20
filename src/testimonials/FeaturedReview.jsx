export default function FeaturedReview({ featured }) {
  return (
    <section className="flex min-h-130 w-full shrink-0 flex-col justify-between rounded-2xl bg-[#075039] px-7 py-9 text-white sm:px-8 sm:py-10 lg:min-h-130 lg:w-100">

      <h3 className="max-w-90 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[36px]">
        {featured.title}
      </h3>

      <div className="mt-8">
        <div className="border-b border-white/20 pb-7">
          <span className="text-4xl font-medium tracking-tight text-white/50">
            {featured.platform}
          </span>
        </div>

        <p className="mt-7 text-lg font-medium tracking-wide">
          {featured.ratingLabel}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex gap-1">
            {Array.from({ length: featured.rating }).map((_, index) => (
              <span key={index} className="text-2xl leading-none text-[#f9bd16]">
                ★
              </span>
            ))}
          </div>

          <span className="h-6 w-px bg-white/30" />

          <div className="flex items-center gap-2 text-lg">
            <span>on</span>
            <span className="font-semibold">{featured.reviews}</span>
            <span className="text-white/50">Reviews</span>
          </div>
        </div>
      </div>

    </section>
  );
}