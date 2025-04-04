"use client"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vendor from "../components/Vendor";
import PromoBanner from "../components/PromoBanner";
import { useFetchVendors } from "../controllers/vendor";
import NavbarMega from "../components/NavbarMega";
import HeroSection from "../components/Hero";
import ServicesSection from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ConsultationProcess from "../components/ConsultationProcess";
import NewsSection from "../components/NewsSection";
// import { useNavigate } from "react-router-dom";

//==================================================================
export default function Home() {
  const { vendors, vendorError, vendorIsLoading } = useFetchVendors(); // Updated variable names
  // const navigate = useNavigate();

  //==================================================================
  return (
    <div className=" p-2 bg-[#28282B ]">
      <NavbarMega />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ConsultationProcess />
      <NewsSection />



      <Footer />
    </div>
  );
}


//==================================================================
