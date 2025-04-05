import Image from "next/image";
import NavbarMega from "./components/NavbarMega";
import HeroSection from "./components/Hero";
import ScrollingPromoBanner from "./components/ScrollingPromoBanner";
import ServicesSection from "./components/Services";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import ConsultationProcess from "./components/ConsultationProcess";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
//===================================================================
export default function Home() {
  //===================================================================
  return (
    <div className=" p-2 bg-[#ffff]">
      <NavbarMega />
      <HeroSection />
      <ScrollingPromoBanner />
      <ServicesSection />
      <Banner
        message="Digicare4u - a revolutionary tracing app, is launching soon, stay updated."
        actionText="Stay Updated"
      />
      <WhyChooseUs />
      <ConsultationProcess />
      <NewsSection />
      <Footer />
    </div>
  );
}
//===================================================================
