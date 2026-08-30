import Feature from "../cards/Feature";
import Hero from "../components/Hero";
import HowToOrder from "../components/HowToOrder";
import RecentlyAdded from "../components/RecentlyAdded";
import WhyUs from "../components/WhyUs";
import ChooseWeed from "../products/ChooseWeed";
import ProductSection from "../products/ProductSection";
import Testimonials from "../testimonials/Testimonials";
import StrainTypes from "../cards/StrainTypes";
import WeedEducation from "../cards/WeedEducation";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />

      <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-8">
        <ProductSection />
        <Testimonials />
        <ChooseWeed />
      </div>
      <HowToOrder />
      <div className=" mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-8">
        <WhyUs />
        <RecentlyAdded />
        <StrainTypes />
        <WeedEducation />
      </div>
    </div>
  );
}
