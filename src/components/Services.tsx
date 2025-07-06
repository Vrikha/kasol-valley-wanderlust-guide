
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: "🏍️",
      title: "Bike Rentals",
      price: "Starting from ₹1200/day",
      description: "Royal Enfield, Pulsar, and other premium bikes for mountain adventures",
      features: ["Helmet included", "Insurance covered", "24/7 support", "Free pick-up/drop"]
    },
    {
      icon: "🛵",
      title: "Scooty Rentals",
      price: "Starting from ₹600/day",
      description: "Perfect for exploring Kasol and nearby villages comfortably",
      features: ["Fuel efficient", "Easy to ride", "Storage space", "Local maps provided"]
    },
    {
      icon: "🚗",
      title: "Taxi Service",
      price: "Charges based on destination",
      description: "Comfortable rides to Kheerganga, Tosh, Malana, and other destinations",
      features: ["Experienced drivers", "Clean vehicles", "Local knowledge", "Flexible timing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Our Rental Services</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Explore the stunning Parvati Valley with our reliable and affordable rental services. 
            All vehicles are well-maintained and ready for your mountain adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-green-100">
              <div className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{service.title}</h3>
                <p className="text-lg text-yellow-600 font-semibold mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors w-full">
                  Book Now
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
