
import { Card } from "@/components/ui/card";

export const ReadExplore = () => {
  const stories = [
    {
      title: "Kasol Village Life",
      subtitle: "The Heart of Parvati Valley",
      description: "Discover the simple yet profound lifestyle of Kasol locals, their traditions, and the warmth that makes every traveler feel at home.",
      image: "/lovable-uploads/4adbb260-d502-486f-92b0-9a7889de1079.png",
      link: "https://www.tripoto.com/himachal-pradesh/trips/my-experience-of-visiting-kasol-that-might-help-you-for-a-perfect-trip-trell-blogs-61939d5321d79"
    },
    {
      title: "Tosh Village",
      subtitle: "The Lost Paradise",
      description: "Journey to the picturesque village of Tosh, known for its scenic beauty, traditional houses, and panoramic valley views.",
      image: "/lovable-uploads/cc749614-a4c8-46c6-90e2-35a7c02bf8ee.png",
      link: "https://blogfulloftraveltales.com/?p=9"
    },
    {
      title: "Chalal Village",
      subtitle: "A Peaceful Retreat",
      description: "Walk through pine forests to reach Chalal, a serene village perfect for meditation and connecting with nature.",
      image: "/lovable-uploads/b52e0892-92be-494f-94bc-c0663cb0cfc1.png",
      link: "https://www.tripoto.com/kasol/places-to-visit/chalal"
    },
    {
      title: "Grahan Village Trek",
      subtitle: "Off the Beaten Path",
      description: "Experience an authentic Himachali village lifestyle in Grahan, accessible only by foot through beautiful mountain trails.",
      image: "/lovable-uploads/cc749614-a4c8-46c6-90e2-35a7c02bf8ee.png",
      link: "https://meetusontheroad.com/kasol-to-grahan-trekking/#google_vignette"
    },
    {
      title: "Manikaran Sahib & Hot Springs",
      subtitle: "Spiritual & Healing Journey",
      description: "Visit the sacred Gurudwara and experience the natural hot springs that have been healing pilgrims for centuries.",
      image: "/lovable-uploads/ae8d3c72-7d35-41e3-bf29-66fafe9a8d66.png",
      link: "https://www.masalabox.co.in/manikaran-pilgrimage-parvati-valley-temples-india/"
    },
    {
      title: "Kheerganga Trek",
      subtitle: "Adventure & Relaxation",
      description: "Embark on the most popular trek in the valley, ending with natural hot springs at 3000 meters altitude.",
      image: "/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png",
      link: "https://blogfulloftraveltales.com/?p=184"
    }
  ];

  const handleStoryClick = (story: any) => {
    if (story.link) {
      window.open(story.link, '_blank');
    }
  };

  return (
    <section id="explore" className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-300 to-sky-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-emerald-600 font-medium text-lg tracking-wider uppercase mb-4">
            Curated Experiences
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 bg-clip-text text-transparent mb-8">
            Read & Explore
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Immerse yourself in the rich culture and breathtaking destinations around Kasol. 
            Let our carefully curated stories guide your next adventure in the Parvati Valley.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-emerald-100/50 hover:border-emerald-200 bg-white/80 backdrop-blur-sm rounded-3xl">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-800 transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-emerald-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {story.subtitle}
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {story.description}
                </p>
                
                <div 
                  className="group/btn flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-all duration-300 cursor-pointer"
                  onClick={() => handleStoryClick(story)}
                >
                  <span>Explore Story</span>
                  <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300 text-lg">
                    →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
            <span className="flex items-center space-x-2">
              <span>Discover All Adventures</span>
              <span>✨</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
