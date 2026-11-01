import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import CoffeeClubSection from "@/components/sections/CoffeeClubSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <MenuSection />
        <AboutSection />
        <CoffeeClubSection />
      </main>
      <Footer />
    </>
  );
}
