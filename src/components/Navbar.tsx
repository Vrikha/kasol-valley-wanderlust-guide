
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-800">🏔️</span>
            <span className="text-xl font-bold text-green-800">Kasol Journeys</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-green-700 hover:text-green-900 font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-green-700 hover:text-green-900 font-medium transition-colors">Rentals</button>
            <button onClick={() => scrollToSection('guesthouses')} className="text-green-700 hover:text-green-900 font-medium transition-colors">Guest Houses</button>
            <button onClick={() => scrollToSection('explore')} className="text-green-700 hover:text-green-900 font-medium transition-colors">Explore</button>
            <button onClick={() => scrollToSection('gallery')} className="text-green-700 hover:text-green-900 font-medium transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-green-700 hover:text-green-900 font-medium transition-colors">Contact</button>
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
              <button onClick={() => scrollToSection('home')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left">Rentals</button>
              <button onClick={() => scrollToSection('guesthouses')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left">Guest Houses</button>
              <button onClick={() => scrollToSection('explore')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left">Explore</button>
              <button onClick={() => scrollToSection('gallery')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-green-700 hover:text-green-900 font-medium transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
