
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(5, 46, 22, 0.8)), url('/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-emerald-950/30 to-teal-900/50"></div>

      {/* Premium floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-sky-200 to-sky-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-amber-300 font-medium text-lg tracking-wider uppercase mb-4 animate-fade-in">
              Premium Travel Experience
            </p>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Kasol Journeys
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the mystical Parvati Valley with our curated collection of premium services. 
            From luxury transportation to authentic Himachali hospitality.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-16 mb-12">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏍️</div>
              <h3 className="font-semibold mb-2 text-lg">Premium Bikes</h3>
              <p className="text-sm text-amber-200 font-medium">From ₹1,200/day</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛵</div>
              <h3 className="font-semibold mb-2 text-lg">Luxury Scooters</h3>
              <p className="text-sm text-amber-200 font-medium">From ₹600/day</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚗</div>
              <h3 className="font-semibold mb-2 text-lg">Private Transfers</h3>
              <p className="text-sm text-amber-200 font-medium">Destination based</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏠</div>
              <h3 className="font-semibold mb-2 text-lg">Boutique Stays</h3>
              <p className="text-sm text-amber-200 font-medium">₹1,500-₹2,500/night</p>
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:from-amber-300 hover:via-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
          >
            <span className="flex items-center space-x-2">
              <span>Discover Our Services</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
