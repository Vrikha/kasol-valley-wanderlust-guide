
import { Card } from "@/components/ui/card";

export const GuestHouses = () => {
  const guestHouses = [
    {
      name: "Delight Homestay Kasol",
      location: "Old Kasol Village",
      price: "₹1800 - ₹2500 per night",
      image: "/lovable-uploads/9b612d44-a68b-43c3-8676-58157e997fd2.png",
      description: "Experience authentic village life in the heart of Old Kasol. Our traditional homestay offers comfortable rooms with mountain views.",
      amenities: ["Mountain View", "Traditional Architecture", "Home-cooked Meals", "Village Experience", "WiFi Available"],
      bookingPhone: "8219191758",
      whatsappNumber: "918219191758",
      locationLink: "https://www.google.com/maps?sca_esv=137b759269c363f4&sxsrf=AE3TifOuYyyni82PMmdtPTy8lNWlv1ULEg:1751993266936&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWRlbGlnaHQgaG9tZXN0YXkgKgIIADITEC4YgAQYFBjHARiHAhiYBRivATITEC4YgAQYQxjHARiYBRiKBRivATIFEAAYgAQyERAuGIAEGMcBGJgFGJkFGK8BMgUQABiABDIFEAAYgAQyDhAuGIAEGMcBGJgFGK8BMgUQABiABDIFEAAYgAQyDhAuGIAEGMcBGJgFGK8BMiIQLhiABBgUGMcBGIcCGJgFGK8BGJcFGNwEGN4EGOAE2AEBSM0SUPcBWPcBcAF4AZABAJgBrgGgAa4BqgEDMC4xuAEDyAEA-AEBmAIDoAL7EcICChAAGLADGNYEGEeYAwCIBgGQBgS6BgYIARABGBSSBwcxLjEuNy0xoAebFLIHAzAuMbgHwgHCBwUyLTEuMsgHIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVe9RfupXQQ5Me4-4G6GpZUF&daddr=Kasol,+Sosan,+Himachal+Pradesh+175105"
    },
    {
      name: "Purple House Kasol",
      location: "Beside Kasol Road, Old Kasol",
      price: "₹1500 - ₹2200 per night",
      image: "/lovable-uploads/9a9a0ec0-7e04-4720-b554-8e1cf07af8d4.png",
      description: "Conveniently located beside the main road, offering easy access to cafes, shops, and the river.",
      amenities: ["Central Location", "Modern Amenities", "River Access", "Cafe Nearby", "Parking Available"],
      bookingPhone: "8219191758",
      whatsappNumber: "918219191758",
      locationLink: "https://www.google.com/maps/dir//Manikaran+Rd,+Kasol,+Sosan,+Himachal+Pradesh+175105/@32.0104563,77.2316281,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39045c41e02a3195:0x734c7aff9d09c0c!2m2!1d77.3140294!2d32.0104829?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Sargam Family House",
      location: "New Kasol, Near Grahan River",
      price: "₹1500 - ₹2500 per night",
      image: "/lovable-uploads/6bec54d9-2ea5-4b92-952d-88bb69c4c23d.png",
      description: "Wake up to the soothing sounds of Grahan River. Perfect for families and groups seeking tranquility.",
      amenities: ["Riverside Location", "Family Friendly", "Peaceful Environment", "River Views", "Spacious Rooms"],
      locationLink: "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABjvBTIKCAMQABiABBiiBDIKCAQQABiABBiiBDIHCAUQABjvBTIHCAYQABjvBdIBCDMxMDRqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZW7cb1TXQQ5MTucN06UMKqq&daddr=New,+Kasol,+Himachal+Pradesh+175105",
      whatsappNumber: "917018227528"
    }
  ];

  const handleLocationClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleBookingClick = (phone: string) => {
    window.open(`tel:+91${phone}`, '_self');
  };

  const handleWhatsAppClick = (whatsappNumber: string) => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

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

                {/* Location Button */}
                <div className="mb-4">
                  <button 
                    onClick={() => handleLocationClick(house.locationLink)}
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition-colors w-full"
                  >
                    📍 View Location
                  </button>
                </div>
                
                <div className="flex gap-2">
                  {house.bookingPhone && (
                    <button 
                      onClick={() => handleBookingClick(house.bookingPhone!)}
                      className="bg-sky-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors flex-1"
                    >
                      Call {house.bookingPhone}
                    </button>
                  )}
                  
                  <button 
                    onClick={() => handleWhatsAppClick(house.whatsappNumber)}
                    className="bg-green-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 flex-1"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
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
