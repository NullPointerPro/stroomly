import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectorStrip from "@/components/SectorStrip";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SectorStrip />
      <HowItWorks />
      <ROICalculator />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
}
