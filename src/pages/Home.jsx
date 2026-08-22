import Feature from "../cards/Feature";
import Hero from "../components/Hero";
import HowToOrder from "../components/HowToOrder";
import WhyUs from "../components/WhyUs";
import ChooseWeed from "../products/ChooseWeed";
import ProductSection from "../products/ProductSection";
import Testimonials from "../testimonials/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />

      <main className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-8">
        <ProductSection />
        <Testimonials />
        <ChooseWeed />
      </main>
      <HowToOrder />
      <WhyUs />
    </div>
  );
}
