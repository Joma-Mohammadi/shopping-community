import Button from "./Button";

export default function ReferBanner({ refer }) {
  return (
    <section className="  mx-auto w-[80%]   overflow-hidden rounded-2xl bg-[#075039] px-10 py-10 text-white sm:px-10 sm:py-12 lg:px-16 lg:py-14">
     

      <div className=" flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">
            {refer.title}
          </h2>

          <p className="mt-4 text-base sm:text-xl lg:text-2xl">
            {refer.subtitle}
            <span className="ml-2 font-bold text-[#f9bd16] sm:ml-3">
              {refer.reward}
            </span>
          </p>
        </div>

        <Button>Refer Here</Button>
      </div>
    </section>
  );
}