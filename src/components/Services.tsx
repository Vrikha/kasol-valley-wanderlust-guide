
import { Card } from "@/components/ui/card";
import { Bike, Car, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Bike className="text-5xl text-orange-500" size={56} />,
      title: "Premium Bike Rentals", 
      price: "Starting from ₹1,200/day",
      description: "Royal Enfield, Pulsar, and other premium motorcycles for unforgettable mountain adventures",
      features: ["Premium helmet included", "Comprehensive insurance", "24/7 roadside support", "GPS navigation"],
      image: "/lovable-uploads/37a68a34-eeb6-42c6-b056-65e4c8b1f076.png",
      whatsappNumber: "917018227528",
      link: "https://www.google.com/search?q=purple+house+kasol&oq=purple+house+kasol&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhjHARjUAhixAxjRAxiABDINCAIQABiRAhiABBiKBTIKCAMQABixAxiABDINCAQQLhjHARjRAxiABDIHCAUQABiABDINCAYQABixAxiABBiKBTIHCAcQABiABDINCAgQABixAxiABBiKBTIKCAkQABixAxiABNIBCDM2NjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      icon: <Car className="text-5xl text-blue-500" size={56} />,
      title: "Luxury Scooty Rentals",
      price: "Starting from ₹600/day", 
      description: "Premium scooters perfect for comfortable exploration of Kasol and surrounding villages",
      features: ["Fuel efficient models", "Easy handling", "Secure storage", "Detailed route maps", "Safety gear included"],
      image: "/lovable-uploads/4a290e3c-9994-491b-969b-7ac519d97634.png",
      whatsappNumber: "917018227528",
      link: "https://share.google/B2R2gvwnRsmIgN096"
    },
    {
      icon: <Car className="text-5xl text-emerald-500" size={56} />,
      title: "Private Taxi Service",
      price: "Premium rates based on destination",
      description: "Luxury transportation to Kheerganga, Tosh, Malana, and other exclusive destinations",
      features: ["Professional chauffeurs", "Premium vehicles", "Local expertise", "Flexible scheduling", "Comfort guaranteed"],
      image: "/lovable-uploads/1e4e772f-581a-40e1-b415-857797f23639.png",
      whatsappNumber: "917018227528"
    }
  ];

  const handleServiceClick = (service: any) => {
    if (service.link) {
      window.open(service.link, '_blank');
    }
  };

  const handleWhatsAppClick = (whatsappNumber: string) => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(240, 253, 244, 0.95)), url('/lovable-uploads/b52e0892-92be-494f-94bc-c0663cb0cfc1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-emerald-600 font-medium text-lg tracking-wider uppercase mb-4">
            Premium Services
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 bg-clip-text text-transparent mb-8">
            Luxury Rental Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the stunning Parvati Valley with our premium fleet of vehicles and exceptional service standards. 
            Every journey is crafted for your comfort and adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-2 border-emerald-100/50 hover:border-emerald-200 rounded-3xl">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-amber-600 font-semibold mb-4 bg-amber-50 px-4 py-2 rounded-full inline-block">
                  {service.price}
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed font-light">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-3">
                      <CheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  {service.link && (
                    <button 
                      onClick={() => handleServiceClick(service)}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex-1 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      <span>Learn More</span>
                    </button>
                  )}
                  
                  <button 
                    onClick={() => handleWhatsAppClick(service.whatsappNumber)}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 flex-1 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
                  >
                    <MessageCircle size={18} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
