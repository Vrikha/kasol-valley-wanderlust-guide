
import { Card } from "@/components/ui/card";

export const ReadExplore = () => {
  const stories = [
    {
      title: "Kasol Village Life",
      subtitle: "The Heart of Parvati Valley",
      description: "Discover the simple yet profound lifestyle of Kasol locals, their traditions, and the warmth that makes every traveler feel at home.",
      emoji: "🏘️",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Tosh Village",
      subtitle: "The Lost Paradise",
      description: "Journey to the picturesque village of Tosh, known for its scenic beauty, traditional houses, and panoramic valley views.",
      emoji: "🏔️",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Chalal Village",
      subtitle: "A Peaceful Retreat",
      description: "Walk through pine forests to reach Chalal, a serene village perfect for meditation and connecting with nature.",
      emoji: "🌲",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Grahan Village Trek",
      subtitle: "Off the Beaten Path",
      description: "Experience an authentic Himachali village lifestyle in Grahan, accessible only by foot through beautiful mountain trails.",
      emoji: "🥾",
      color: "from-amber-400 to-amber-600"
    },
    {
      title: "Manikaran Sahib & Hot Springs",
      subtitle: "Spiritual & Healing Journey",
      description: "Visit the sacred Gurudwara and experience the natural hot springs that have been healing pilgrims for centuries.",
      emoji: "🙏",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Kheerganga Trek",
      subtitle: "Adventure & Relaxation",
      description: "Embark on the most popular trek in the valley, ending with natural hot springs at 3000 meters altitude.",
      emoji: "♨️",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="explore" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Read & Explore</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Immerse yourself in the rich culture and breathtaking destinations around Kasol. 
            Let our stories guide your next adventure in the Parvati Valley.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-green-100">
              <div className={`h-32 bg-gradient-to-br ${story.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
                {story.emoji}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-900 transition-colors">
                  {story.title}
                </h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">{story.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-800 transition-colors">
                  <span>Read More</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore All Stories
          </button>
        </div>
      </div>
    </section>
  );
};
