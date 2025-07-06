import { Card } from "@/components/ui/card";

export const GuestHouses = () => {
  const guestHouses = [
    {
      name: "Delight Homestay Kasol",
      location: "Old Kasol Village",
      price: "₹1800 - ₹2500 per night",
      image: "/lovable-uploads/ae8d3c72-7d35-41e3-bf29-66fafe9a8d66.png",
      description: "Experience authentic village life in the heart of Old Kasol. Our traditional homestay offers comfortable rooms with mountain views.",
      amenities: ["Mountain View", "Traditional Architecture", "Home-cooked Meals", "Village Experience", "WiFi Available"]
    },
    {
      name: "Purple House Kasol",
      location: "Beside Kasol Road, Old Kasol",
      price: "₹1500 - ₹2200 per night",
      image: "/lovable-uploads/4adbb260-d502-486f-92b0-9a7889de1079.png",
      description: "Conveniently located beside the main road, offering easy access to cafes, shops, and the river.",
      amenities: ["Central Location", "Modern Amenities", "River Access", "Cafe Nearby", "Parking Available"]
    },
    {
      name: "Sargam Family House",
      location: "New Kasol, Near Grahan River",
      price: "₹1500 - ₹2500 per night",
      image: "/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png",
      description: "Wake up to the soothing sounds of Grahan River. Perfect for families and groups seeking tranquility.",
      amenities: ["Riverside Location", "Family Friendly", "Peaceful Environment", "River Views", "Spacious Rooms"]
    }
  ];

  return (
    <section 
      id="guesthouses" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(236, 254, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/lovable-uploads/e1d163c6-c720-4e50-9c8b-96ad71b3387b.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Guest Houses</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Stay in our carefully selected properties that offer the perfect blend of comfort, 
            authenticity, and stunning Himalayan hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guestHouses.map((house, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-sky-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={house.image} 
                  alt={house.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">{house.name}</h3>
                <p className="text-sky-600 font-medium mb-2">📍 {house.location}</p>
                <p className="text-lg text-amber-600 font-semibold mb-4">{house.price}</p>
                <p className="text-gray-600 mb-6">{house.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-emerald-700">Amenities:</h4>
                  {house.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-emerald-500">✓</span>
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors w-full">
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
