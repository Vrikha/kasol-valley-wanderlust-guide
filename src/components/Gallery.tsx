
export const Gallery = () => {
  const images = [
    { id: 1, title: "Parvati Valley Views", category: "Nature", emoji: "🏔️" },
    { id: 2, title: "Kasol Village", category: "Village Life", emoji: "🏘️" },
    { id: 3, title: "Royal Enfield Ready", category: "Bikes", emoji: "🏍️" },
    { id: 4, title: "Delight Homestay", category: "Accommodation", emoji: "🏠" },
    { id: 5, title: "Tosh Village Sunset", category: "Nature", emoji: "🌅" },
    { id: 6, title: "Grahan River", category: "Nature", emoji: "🌊" },
    { id: 7, title: "Local Culture", category: "Culture", emoji: "🎭" },
    { id: 8, title: "Mountain Trails", category: "Trekking", emoji: "🥾" }
  ];

  const categories = ["All", "Nature", "Village Life", "Bikes", "Accommodation", "Culture", "Trekking"];

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
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 aspect-square cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {image.emoji}
                </div>
                <h3 className="text-lg font-semibold text-center px-4">{image.title}</h3>
                <p className="text-sm opacity-75 mt-1">{image.category}</p>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
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
