
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { GuestHouses } from "@/components/GuestHouses";
import { ReadExplore } from "@/components/ReadExplore";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-green-50">
      <Navbar />
      <Hero />
      <Services />
      <GuestHouses />
      <ReadExplore />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
