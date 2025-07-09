
import { Card } from "@/components/ui/card";
import { Star, MapPin, Calendar } from "lucide-react";

export const FeaturedDeals = () => {
  const deals = [
    {
      title: "Kasol Valley Adventure",
      location: "Kasol, Himachal Pradesh",
      price: "₹2,499",
      originalPrice: "₹3,999",
      image: "/lovable-uploads/4adbb260-d502-486f-92b0-9a7889de1079.png",
      rating: 4.8,
      reviews: 156,
      duration: "3 Days 2 Nights"
    },
    {
      title: "Tosh Village Retreat",
      location: "Tosh, Parvati Valley",
      price: "₹3,299",
      originalPrice: "₹4,799",
      image: "/lovable-uploads/cc749614-a4c8-46c6-90e2-35a7c02bf8ee.png",
      rating: 4.9,
      reviews: 203,
      duration: "4 Days 3 Nights"
    },
    {
      title: "Kheerganga Trek Package",
      location: "Kheerganga, Himachal Pradesh",
      price: "₹1,899",
      originalPrice: "₹2,999",
      image: "/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png",
      rating: 4.7,
      reviews: 89,
      duration: "2 Days 1 Night"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            HOT DEALS IN THIS SUMMER
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals and packages for your perfect Himalayan getaway
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  SALE
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{deal.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{deal.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{deal.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{deal.duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-emerald-600">{deal.price}</span>
                    <span className="text-gray-400 line-through">{deal.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {deal.reviews} Reviews
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
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
