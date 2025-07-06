
export const Gallery = () => {
  const images = [
    { 
      id: 1, 
      title: "Parvati Valley Views", 
      category: "Nature", 
      emoji: "🏔️",
      image: "/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png"
    },
    { 
      id: 2, 
      title: "Kasol Village", 
      category: "Village Life", 
      emoji: "🏘️",
      image: "/lovable-uploads/4adbb260-d502-486f-92b0-9a7889de1079.png"
    },
    { 
      id: 3, 
      title: "Royal Enfield Ready", 
      category: "Bikes", 
      emoji: "🏍️",
      image: "/lovable-uploads/37a68a34-eeb6-42c6-b056-65e4c8b1f076.png"
    },
    { 
      id: 4, 
      title: "Delight Homestay", 
      category: "Accommodation", 
      emoji: "🏠",
      image: "/lovable-uploads/ae8d3c72-7d35-41e3-bf29-66fafe9a8d66.png"
    },
    { 
      id: 5, 
      title: "Temple Views", 
      category: "Culture", 
      emoji: "🛕",
      image: "/lovable-uploads/d88a7f7b-bb7b-42c6-a47f-6b25ab36991e.png"
    },
    { 
      id: 6, 
      title: "Mountain Meadows", 
      category: "Nature", 
      emoji: "🌄",
      image: "/lovable-uploads/cc749614-a4c8-46c6-90e2-35a7c02bf8ee.png"
    },
    { 
      id: 7, 
      title: "Local Culture", 
      category: "Culture", 
      emoji: "🎭",
      image: "/lovable-uploads/b52e0892-92be-494f-94bc-c0663cb0cfc1.png"
    },
    { 
      id: 8, 
      title: "Scooter Adventures", 
      category: "Rentals", 
      emoji: "🛵",
      image: "/lovable-uploads/a3fc9426-09eb-4dfa-a880-28551a062819.png"
    }
  ];

  const categories = ["All", "Nature", "Village Life", "Bikes", "Accommodation", "Culture", "Rentals"];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Gallery</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Capture the essence of Kasol through our lens. From majestic mountain views to cozy accommodations, 
            see what awaits you in the Parvati Valley.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white border-2 border-green-200 text-green-700 font-medium hover:bg-green-100 hover:border-green-300 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img 
                src={image.image} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="text-2xl mb-2">{image.emoji}</div>
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm opacity-75">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
};
