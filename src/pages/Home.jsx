import Feature from "../cards/Feature";
import Hero from "../components/Hero";
import ProductSection from "../products/ProductSection";
import Testimonials from "../testimonials/Testimonials";

export default function Home() {
  return (
    <div>
       <Hero />
       <Feature/>
       <ProductSection/>
       <Testimonials/>
    </div>
  );
}
