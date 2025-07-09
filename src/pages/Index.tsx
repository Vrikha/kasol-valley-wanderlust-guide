
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { GuestHouses } from "@/components/GuestHouses";
import { ReadExplore } from "@/components/ReadExplore";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedDeals } from "@/components/FeaturedDeals";
import { BestDestinations } from "@/components/BestDestinations";
import { HotelDeals } from "@/components/HotelDeals";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedDeals />
      <BestDestinations />
      <HotelDeals />
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
