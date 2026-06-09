import { HeroSection } from "../components/HeroSection";
import { FeaturedCategories } from "../components/FeaturedCategories";
import {Newsletter} from '../components/Newsletter';
import { Footer } from "../components/Footer";

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

