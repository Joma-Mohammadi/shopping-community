import data from "../data/howToOrder.json";
import ReferBanner from "./ReferBanner";
import OrderStep from "./OrderStep";
import { Link } from "react-router-dom";
import Button from "./Button"

export default function HowToOrder() {
  return (
    <section className="relative w-full bg-[#001b15] px-5 pb-14 pt-0 text-white sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">

      {/* Refer Banner */}
      <div className=" relative z-20 mx-auto  -translate-y-1/2 max-w-410 ">
        <ReferBanner refer={data.refer} />
      </div>

      {/* Main Content */}
      <div className=" mx-auto  w-full  max-w-275 text-center sm:-mt-16.25 lg:-mt-18.75">

        {/* Title */}
        <h2 className="mx-auto max-w-212.5 text-[25px] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-[34px] lg:text-[42px]">
          {data.section.title}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-190 text-[9px] leading-[1.8] text-white/45 sm:mt-6 sm:text-[11px] sm:leading-6">
          {data.section.description}
        </p>

        {/* Steps */}
        <div className=" mt-12 grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14 lg:mt-14 lg:grid-cols-2 
        lg:gap-x-24 lg:gap-y-16">
          {data.steps.map((step) => (
            <OrderStep key={step.id} step={step} />
          ))}
        </div>

        {/* Button */}
        <Button className="flex items-center mx-auto justify-center">Choose your Weed</Button>
      </div>
    </section>
  );
}