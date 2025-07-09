
import { Card } from "@/components/ui/card";
import { Star, MapPin, Wifi, Car, Coffee } from "lucide-react";

export const HotelDeals = () => {
  const hotels = [
    {
      name: "Delight Homestay Kasol",
      location: "Old Kasol Village, Himachal Pradesh",
      image: "/lovable-uploads/9b612d44-a68b-43c3-8676-58157e997fd2.png",
      rating: 4.5,
      reviews: 128,
      price: "₹2,245.00",
      originalPrice: "₹3,500.00",
      amenities: ["Free WiFi", "Parking", "Restaurant"]
    },
    {
      name: "Purple House Kasol", 
      location: "Beside Kasol Road, Old Kasol",
      image: "/lovable-uploads/9a9a0ec0-7e04-4720-b554-8e1cf07af8d4.png",
      rating: 4.3,
      reviews: 96,
      price: "₹1,899.00",
      originalPrice: "₹2,800.00",
      amenities: ["Free WiFi", "Parking", "Mountain View"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best of Hotel
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comfortable stays with authentic Himalayan hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hotels.map((hotel, index) => (
            <Card key={index} className="flex overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0">
              <div className="w-1/2">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${star <= Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{hotel.reviews} Reviews</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    {hotel.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        {amenity === "Free WiFi" && <Wifi className="w-3 h-3 mr-1" />}
                        {amenity === "Parking" && <Car className="w-3 h-3 mr-1" />}
                        {amenity === "Restaurant" && <Coffee className="w-3 h-3 mr-1" />}
                        {amenity === "Mountain View" && <MapPin className="w-3 h-3 mr-1" />}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-emerald-600">{hotel.price}</span>
                      <span className="text-gray-400 line-through text-sm">{hotel.originalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>
                  
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Book Now
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
