export default function FeaturedReview({ featured }) {
  return (
    <section className="flex w-full flex-1 flex-col justify-between rounded-2xl bg-[#075039] p-6 text-white sm:p-8 lg:p-10">
      
      <h3 className="max-w-67.5 text-2xl font-semibold leading-tight sm:text-3xl lg:text-[38px]">
        {featured.title}
      </h3>

      <div className="mt-8 flex flex-col">
        <div className="border-b border-white/20 pb-8">
          <span className="text-3xl font-medium tracking-tight text-white/50 sm:text-4xl">
            {featured.platform}
          </span>
        </div>

        <p className="mt-8 text-base font-medium tracking-wide sm:text-lg">
          {featured.ratingLabel}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
          <div className="flex gap-1">
            {Array.from({ length: featured.rating }).map((_, index) => (
              <span key={index} className="text-2xl leading-none text-[#f9bd16]">
                ★
              </span>
            ))}
          </div>

          <span className="hidden h-6 w-px bg-white/30 sm:block" />

          <div className="flex items-center gap-2 text-base sm:text-lg">
            <span>on</span>
            <span className="font-semibold">{featured.reviews}</span>
            <span className="text-white/50">Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}