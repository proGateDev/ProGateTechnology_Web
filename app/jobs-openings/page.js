import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import JobsPosted from "../components/JobsPosted";
import NavbarMega from "../components/NavbarMega";
import OurLocation from "../components/OurLocation";
import ScrollingPromoBanner from "../components/ScrollingPromoBanner";

//===================================================================
export default function Home() {
  //===================================================================
  return (
    <div className=" p-2 bg-[#ffff]">
      <NavbarMega />
      <HeroSection />
      <JobsPosted />
      {/* <ScrollingPromoBanner /> */}
      <OurLocation />
      <Footer />
    </div>
  );
}
//===================================================================
