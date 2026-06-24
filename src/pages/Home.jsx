import { HeroSection } from "../Components/HeroSection";
import { FeaturedCategories } from "../Components/FeaturedCategories";
import {Newsletter} from '../Components/Newsletter';
import { Footer } from "../Components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories /> 
      <Newsletter />
      <Footer />

    </>
  );
}

export {Home};

