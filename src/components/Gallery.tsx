
export const Gallery = () => {
  const images = [
    { 
      id: 1, 
      title: "Parvati Valley Views", 
      category: "Nature", 
      emoji: "🏔️",
      image: "/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png",
      link: "https://www.google.com/search?sca_esv=97d2e28a3f4a1e73&sxsrf=AE3TifPu3FC9_lWDBF8POrBF0MymE5EN4A:1751910592254&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2aTtVSqS-8espAxkq1fZ3U7lGlT9cP6FXyGQngOv_CCADopsXkVDJjBiwGRjwY_8IoP05MChc5gdqniqdF5e_bpsKBqlzaGeWP5BVUULJoZB4HGtZlG5VVtvBSU1W5tnGlvR_1g&q=Parvati+valley+views&sa=X&ved=2ahUKEwi6hZ7Ep6uOAxXfxDgGHeDDE0AQtKgLegQIFBAB&biw=1536&bih=695&dpr=1.25"
    },
    { 
      id: 2, 
      title: "Kasol Village", 
      category: "Village Life", 
      emoji: "🏘️",
      image: "/lovable-uploads/4adbb260-d502-486f-92b0-9a7889de1079.png",
      link: "https://www.google.com/search?q=kasol+village%27&oq=kasol+village%27&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIxNTFqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8"
    },
    { 
      id: 3, 
      title: "Royal Enfield Ready", 
      category: "Bikes", 
      emoji: "🏍️",
      image: "/lovable-uploads/37a68a34-eeb6-42c6-b056-65e4c8b1f076.png",
      link: "https://www.google.com/search?q=Bide+leh+ladakh+tours&sca_esv=97d2e28a3f4a1e73&udm=2&biw=1536&bih=695&sxsrf=AE3TifOonQ4bntym4u3wkC-RZL6tJ48pCw%3A1751910657291&ei=AQlsaKLIEeOM4-EPlt_zsQE&ved=0ahUKEwjizJ_jp6uOAxVjxjgGHZbvPBYQ4dUDCBE&uact=5&oq=Bide+leh+ladakh+tours&gs_lp=EgNpbWciFUJpZGUgbGVoIGxhZGFraCB0b3Vyc0iDTFDEAliIS3AKeACQAQSYAZ4EoAH5OKoBDDAuMjMuNS4zLjIuMrgBA8gBAPgBAZgCDqAC1gyoAgrCAgoQABiABBhDGIoFwgIGEAAYBxgewgIFEAAYgATCAgcQIxgnGMkCwgIIEAAYgAQYsQPCAgQQABgDwgIKECMYJxjJAhjqAsICCxAAGIAEGLEDGIMBwgINEAAYgAQYsQMYQxiKBcICChAAGIAEGLEDGArCAgcQABiABBgKwgIGEAAYCBgemAMGiAYBkgcGMy4xMC4xoAfGebIHBjAuMTAuMbgHxgzCBwYwLjIuMTLIB0A&sclient=img"
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
      image: "/lovable-uploads/d88a7f7b-bb7b-42c6-a47f-6b25ab36991e.png",
      link: "https://www.google.com/search?q=Himachal+scenic+temples&sca_esv=97d2e28a3f4a1e73&udm=2&biw=1536&bih=695&sxsrf=AE3TifNA_4nMdaHRLN7NusYufXC3mIr02Q%3A1751910674521&ei=EglsaILOH5eP4-EPpaCjqQI&ved=0ahUKEwiCn7vrp6uOAxWXxzgGHSXQKCUQ4dUDCBE&uact=5&oq=Himachal+scenic+temples&gs_lp=EgNpbWciF0hpbWFjaGFsIHNjZW5pYyB0ZW1wbGVzSJUgUABY5x5wAHgAkAEAmAGpAaABjxmqAQQwLjIzuAEDyAEA-AEBmAIQoALXEcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgUQABiABMICBxAjGCcYyQLCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICDhAAGIAEGLEDGIMBGIoFwgIEEAAYHsICBhAAGAgYHpgDAJIHBDAuMTagB4FbsgcEMC4xNrgH1xHCBwYwLjQuMTLIB0Q&sclient=img"
    },
    { 
      id: 6, 
      title: "Mountain Meadows", 
      category: "Nature", 
      emoji: "🌄",
      image: "/lovable-uploads/cc749614-a4c8-46c6-90e2-35a7c02bf8ee.png",
      link: "https://www.google.com/search?q=Kullu+valley+hidden+places&sca_esv=97d2e28a3f4a1e73&udm=2&biw=1536&bih=695&sxsrf=AE3TifMQXkBlLekVN0Q9HmKIFih_Wfon9w%3A1751910708168&ei=NAlsaPeDCsLBjuMPwpqvqQY&ved=0ahUKEwj37cD7p6uOAxXCoGMGHULNK2UQ4dUDCBE&uact=5&oq=Kullu+valley+hidden+places&gs_lp=EgNpbWciGkt1bGx1IHZhbGxleSBoaWRkZW4gcGxhY2VzSPzvAVDXpAFYhu8BcBB4AJABA5gBogWgAaJDqgENMi4yNy4xMS4wLjIuMrgBA8gBAPgBAZgCMKACwi6oAgrCAgcQIxgnGMkCwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgUQABiABMICDRAAGIAEGLEDGEMYigXCAg4QABiABBixAxiDARiKBcICBhAAGAgYHsICCBAAGAgYChgewgIKECMYJxjJAhjqAsICBBAAGB6YAwaIBgGSBw0xOC4yMS43LjAuMS4xoAeZzQGyBwwyLjIxLjcuMC4xLjG4B-YtwgcIMC44LjM4LjLIB9gB&sclient=img"
    },
    { 
      id: 7, 
      title: "Local Culture", 
      category: "Culture", 
      emoji: "🎭",
      image: "/lovable-uploads/b52e0892-92be-494f-94bc-c0663cb0cfc1.png",
      link: "https://www.google.com/search?q=Kullu+local+culture+and+tradition&sca_esv=97d2e28a3f4a1e73&udm=2&biw=1536&bih=695&sxsrf=AE3TifOuTnxK8-C-MfVPuLq0eFZFwxIvyA%3A1751910749028&ei=XQlsaNDEAeCF4-EP7pf_2Ao&ved=0ahUKEwiQ5_6OqKuOAxXgwjgGHe7LH6sQ4dUDCBE&uact=5&oq=Kullu+local+culture+and+tradition&gs_lp=EgNpbWciIUt1bGx1IGxvY2FsIGN1bHR1cmUgYW5kIHRyYWRpdGlvbki_LFAAWKAqcAB4AJABApgBxAOgAb4vqgEKMC4yNC42LjEuMrgBA8gBAPgBAZgCDKACghHCAgoQABiABBhDGIoFwgIHECMYJxjJAsICDRAAGIAEGLEDGEMYigXCAggQABiABBixA8ICBRAAGIAEwgIEEAAYHpgDAJIHCTAuOS4yLjAuMaAH8EiyBwkwLjkuMi4wLjG4B4IRwgcHMC4yLjkuMcgHQg&sclient=img"
    }
  ];

  const categories = ["All", "Nature", "Village Life", "Bikes", "Accommodation", "Culture"];

  const handleImageClick = (image: any) => {
    if (image.link) {
      window.open(image.link, '_blank');
    }
  };

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
              onClick={() => handleImageClick(image)}
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
                {image.link && (
                  <p className="text-xs mt-1 opacity-60">Click to explore more</p>
                )}
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
