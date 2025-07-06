
import { Card } from "@/components/ui/card";

export const GuestHouses = () => {
  const guestHouses = [
    {
      name: "Delight Homestay Kasol",
      location: "Old Kasol Village",
      price: "₹1300 - ₹2000 per night",
      image: "🏔️",
      description: "Experience authentic village life in the heart of Old Kasol. Our traditional homestay offers comfortable rooms with mountain views.",
      amenities: ["Mountain View", "Traditional Architecture", "Home-cooked Meals", "Village Experience", "WiFi Available"]
    },
    {
      name: "Purple House Kasol",
      location: "Beside Kasol Road, Old Kasol",
      price: "₹1500 - ₹2200 per night",
      image: "🏠",
      description: "Conveniently located beside the main road, offering easy access to cafes, shops, and the river.",
      amenities: ["Central Location", "Modern Amenities", "River Access", "Cafe Nearby", "Parking Available"]
    },
    {
      name: "Sargam Family House",
      location: "New Kasol, Near Grahan River",
      price: "₹1800 - ₹2500 per night",
      image: "🌊",
      description: "Wake up to the soothing sounds of Grahan River. Perfect for families and groups seeking tranquility.",
      amenities: ["Riverside Location", "Family Friendly", "Peaceful Environment", "River Views", "Spacious Rooms"]
    }
  ];

  return (
    <section id="guesthouses" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Our Guest Houses</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Stay in our carefully selected properties that offer the perfect blend of comfort, 
            authenticity, and stunning Himalayan hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guestHouses.map((house, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-blue-100">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-8xl">
                {house.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{house.name}</h3>
                <p className="text-blue-600 font-medium mb-2">📍 {house.location}</p>
                <p className="text-lg text-yellow-600 font-semibold mb-4">{house.price}</p>
                <p className="text-gray-600 mb-6">{house.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-green-700">Amenities:</h4>
                  {house.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full">
                  Book This Property
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
