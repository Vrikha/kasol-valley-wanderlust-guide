import { useState } from "react";
import { Menu, X, Facebook, Instagram, MessageCircle, MapPin, Home, Car, Building, BookOpen, Camera, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917018227528', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/sargamtourkasol?mibextid=ZbWKwL', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/kasol__journey?igsh=Nmw5ZnN0a3F3emd5', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="text-2xl text-green-800" size={28} />
            <span className="text-xl font-bold text-green-800">Kasol Journeys</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-green-700 hover:text-green-900 font-medium transition-colors flex items-center space-x-1">
              <Home size={16} />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-green-700 hover:text-green-900 font-medium transition-colors flex items-center space-x-1">
              <Car size={16} />
              <span>Rentals</span>
            </button>
            <button onClick={() => scrollToSection('guesthouses')} className="text-green-700 hover:text-green-900 font-medium transition-colors flex items-center space-x-1">
              <Building size={16} />
              <span>Guest Houses</span>
            </button>
            <button onClick={() => scrollToSection('explore')} className="text-green-700 hover:text-green-900 font-medium transition-colors flex items-center space-x-1">
              <BookOpen size={16} />
              <span>Explore</span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-green-700 hover:text-green-900 font-medium transition-colors flex items-center space-x-1">
              <Camera size={16} />
              <span>Gallery</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-green-700 hover:text-green-900 font-medium transition-colors flex items-center space-x-1">
              <Phone size={16} />
              <span>Contact</span>
            </button>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={handleFacebookClick}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                size="icon"
              >
                <Facebook size={18} />
              </Button>
              
              <Button
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-full transition-colors"
                size="icon"
              >
                <Instagram size={18} />
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left flex items-center space-x-2">
                <Home size={16} />
                <span>Home</span>
              </button>
              <button onClick={() => scrollToSection('services')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left flex items-center space-x-2">
                <Car size={16} />
                <span>Rentals</span>
              </button>
              <button onClick={() => scrollToSection('guesthouses')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left flex items-center space-x-2">
                <Building size={16} />
                <span>Guest Houses</span>
              </button>
              <button onClick={() => scrollToSection('explore')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left flex items-center space-x-2">
                <BookOpen size={16} />
                <span>Explore</span>
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left flex items-center space-x-2">
                <Camera size={16} />
                <span>Gallery</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left flex items-center space-x-2">
                <Phone size={16} />
                <span>Contact</span>
              </button>
              
              {/* Mobile Social Media Buttons */}
              <div className="flex space-x-2">
                <Button
                  onClick={handleFacebookClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors flex-1 justify-center"
                >
                  <Facebook size={18} />
                  <span>Facebook</span>
                </Button>
                
                <Button
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors flex-1 justify-center"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                </Button>
              </div>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors w-full justify-center"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
