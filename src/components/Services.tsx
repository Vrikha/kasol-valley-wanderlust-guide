
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: "🏍️",
      title: "Bike Rentals", 
      price: "Starting from ₹1200/day",
      description: "Royal Enfield, Pulsar, and other premium bikes for mountain adventures",
      features: ["Helmet included", "Insurance covered", "24/7 support", "Free pick-up/drop"],
      image: "/lovable-uploads/37a68a34-eeb6-42c6-b056-65e4c8b1f076.png"
    },
    {
      icon: "🛵",
      title: "Scooty Rentals",
      price: "Starting from ₹600/day", 
      description: "Perfect for exploring Kasol and nearby villages comfortably",
      features: ["Fuel efficient", "Easy to ride", "Storage space", "Local maps provided"],
      image: "/lovable-uploads/4a290e3c-9994-491b-969b-7ac519d97634.png",
      link: "https://maps.app.goo.gl/MtBxjgwm14bapnbTA?g_st=aw"
    },
    {
      icon: "🚗",
      title: "Taxi Service",
      price: "Charges based on destination",
      description: "Comfortable rides to Kheerganga, Tosh, Malana, and other destinations",
      features: ["Experienced drivers", "Clean vehicles", "Local knowledge", "Flexible timing"],
      image: "/lovable-uploads/1e4e772f-581a-40e1-b415-857797f23639.png"
    }
  ];

  const handleServiceClick = (service: any) => {
    if (service.link) {
      window.open(service.link, '_blank');
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 253, 244, 0.9), rgba(236, 254, 255, 0.9)), url('/lovable-uploads/b52e0892-92be-494f-94bc-c0663cb0cfc1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Rental Services</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Explore the stunning Parvati Valley with our reliable and affordable rental services. 
            All vehicles are well-maintained and ready for your mountain adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-emerald-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">{service.title}</h3>
                <p className="text-lg text-amber-600 font-semibold mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <span className="text-emerald-500">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleServiceClick(service)}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors w-full"
                >
                  {service.link ? "More Information" : "Book Now"}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
