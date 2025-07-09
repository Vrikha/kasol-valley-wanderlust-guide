
import { Card } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

export const BestDestinations = () => {
  const destinations = [
    {
      name: "Singapore",
      country: "Singapore",
      image: "/lovable-uploads/ae8d3c72-7d35-41e3-bf29-66fafe9a8d66.png",
      rating: 4.8,
      price: "From ₹45,000"
    },
    {
      name: "Paris",
      country: "France",
      image: "/lovable-uploads/b52e0892-92be-494f-94bc-c0663cb0cfc1.png",
      rating: 4.9,
      price: "From ₹65,000"
    },
    {
      name: "London",
      country: "United Kingdom",
      image: "/lovable-uploads/cc749614-a4c8-46c6-90e2-35a7c02bf8ee.png",
      rating: 4.7,
      price: "From ₹55,000"
    },
    {
      name: "Singapore",
      country: "Singapore",
      image: "/lovable-uploads/4adbb260-d502-486f-92b0-9a7889de1079.png",
      rating: 4.8,
      price: "From ₹45,000"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best of Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked destinations that offer the perfect blend of adventure and serenity
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 cursor-pointer">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{destination.name}</span>
                  </div>
                  <p className="text-xs opacity-90">{destination.country}</p>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-2 py-1 rounded flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-emerald-600 font-semibold">{destination.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
