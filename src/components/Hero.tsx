
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-b from-blue-900 via-green-800 to-green-600 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-green-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to
            <span className="block text-yellow-300">Kasol Journeys</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your gateway to the mystical Parvati Valley. Experience authentic Himachali hospitality 
            with our bike rentals, cozy guest houses, and local travel services.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-12 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🏍️</div>
              <h3 className="font-semibold mb-1">Bike Rentals</h3>
              <p className="text-sm text-blue-100">From ₹1200/day</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🛵</div>
              <h3 className="font-semibold mb-1">Scooty Rentals</h3>
              <p className="text-sm text-blue-100">From ₹600/day</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="font-semibold mb-1">Taxi Service</h3>
              <p className="text-sm text-blue-100">Destination based</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold mb-1">Guest Houses</h3>
              <p className="text-sm text-blue-100">₹1300-₹2500/night</p>
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
