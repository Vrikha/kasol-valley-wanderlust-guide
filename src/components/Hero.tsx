
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(44, 82, 130, 0.8), rgba(34, 139, 34, 0.7)), url('/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-emerald-900/20 to-teal-800/40"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sky-200 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-emerald-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to
            <span className="block text-amber-300">Kasol Journeys</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Your gateway to the mystical Parvati Valley. Experience authentic Himachali hospitality 
            with our bike rentals, cozy guest houses, and local travel services.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-12 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🏍️</div>
              <h3 className="font-semibold mb-1">Bike Rentals</h3>
              <p className="text-sm text-sky-100">From ₹1200/day</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🛵</div>
              <h3 className="font-semibold mb-1">Scooty Rentals</h3>
              <p className="text-sm text-sky-100">From ₹600/day</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="font-semibold mb-1">Taxi Service</h3>
              <p className="text-sm text-sky-100">Destination based</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold mb-1">Guest Houses</h3>
              <p className="text-sm text-sky-100">₹1500-₹2500/night</p>
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-400 text-slate-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
