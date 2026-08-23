import Button from "./Button";

export default function ReferBanner({ refer }) {
  return (
    <section className="  mx-auto rounded-2xl bg-[#075039] px-10 py-10 text-white sm:px-10  lg:px-40 lg:py-20">
     

      <div className=" flex flex-col items-start justify-between  sm:flex-row sm:items-center ">
        <div>
          <h2 className="text-2xl  pb-8 font-bold sm:text-4xl lg:text-5xl">
            {refer.title}
          </h2>

          <p className="mt-4 text-base sm:text-xl lg:text-2xl">
            {refer.subtitle}
            <span className="ml-6 font-bold text-[#f9bd16] sm:ml-8">
              {refer.reward}
            </span>
          </p>
        </div>

        <Button className="">Refer Here</Button>
      </div>
    </section>
  );
}