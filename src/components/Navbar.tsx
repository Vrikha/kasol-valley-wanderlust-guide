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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
              <MapPin className="text-white" size={32} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Kasol Journeys
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">Premium Travel Experience</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="group text-slate-700 hover:text-emerald-700 font-medium transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-emerald-50">
              <Home size={18} />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="group text-slate-700 hover:text-emerald-700 font-medium transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-emerald-50">
              <Car size={18} />
              <span>Rentals</span>
            </button>
            <button onClick={() => scrollToSection('guesthouses')} className="group text-slate-700 hover:text-emerald-700 font-medium transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-emerald-50">
              <Building size={18} />
              <span>Guest Houses</span>
            </button>
            <button onClick={() => scrollToSection('explore')} className="group text-slate-700 hover:text-emerald-700 font-medium transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-emerald-50">
              <BookOpen size={18} />
              <span>Explore</span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="group text-slate-700 hover:text-emerald-700 font-medium transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-emerald-50">
              <Camera size={18} />
              <span>Gallery</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="group text-slate-700 hover:text-emerald-700 font-medium transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-emerald-50">
              <Phone size={18} />
              <span>Contact</span>
            </button>
            
            {/* Premium Social Media Icons */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-slate-200">
              <Button
                onClick={handleFacebookClick}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-110"
                size="icon"
              >
                <Facebook size={20} />
              </Button>
              
              <Button
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-110"
                size="icon"
              >
                <Instagram size={20} />
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-5 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-emerald-700 p-2 rounded-lg hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-emerald-100 rounded-b-2xl">
            <div className="flex flex-col space-y-2 p-6">
              
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-emerald-700 font-medium transition-colors text-left flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50">
                <Home size={20} />
                <span>Home</span>
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-emerald-700 font-medium transition-colors text-left flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50">
                <Car size={20} />
                <span>Rentals</span>
              </button>
              <button onClick={() => scrollToSection('guesthouses')} className="text-slate-700 hover:text-emerald-700 font-medium transition-colors text-left flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50">
                <Building size={20} />
                <span>Guest Houses</span>
              </button>
              <button onClick={() => scrollToSection('explore')} className="text-slate-700 hover:text-emerald-700 font-medium transition-colors text-left flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50">
                <BookOpen size={20} />
                <span>Explore</span>
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-emerald-700 font-medium transition-colors text-left flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50">
                <Camera size={20} />
                <span>Gallery</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-emerald-700 font-medium transition-colors text-left flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50">
                <Phone size={20} />
                <span>Contact</span>
              </button>
              
              {/* Mobile Social Media Buttons */}
              <div className="flex space-x-3 pt-4">
                <Button
                  onClick={handleFacebookClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 flex-1 justify-center shadow-lg"
                >
                  <Facebook size={20} />
                  <span className="font-semibold">Facebook</span>
                </Button>
                
                <Button
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 flex-1 justify-center shadow-lg"
                >
                  <Instagram size={20} />
                  <span className="font-semibold">Instagram</span>
                </Button>
              </div>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 w-full justify-center shadow-lg"
              >
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
