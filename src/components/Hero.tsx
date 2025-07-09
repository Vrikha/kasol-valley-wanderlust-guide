
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.6), rgba(16, 185, 129, 0.4)), url('/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Mountain overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-emerald-900/30"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-300/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-sky-300/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-5xl px-8">
          {/* Main heading with mountain aesthetic */}
          <div className="mb-8">
            <p className="text-emerald-300 font-light text-lg md:text-xl mb-4 tracking-widest uppercase opacity-90">
              Welcome to Nature's Paradise
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-sky-200 bg-clip-text text-transparent">
                Keep calm &
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-200 via-white to-emerald-100 bg-clip-text text-transparent">
                travelling On
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 font-light opacity-95 leading-relaxed max-w-3xl mx-auto text-slate-100">
            Experience the mystical Parvati Valley with premium services, where ancient mountains meet modern comfort
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600">
              <span className="relative z-10">Explore Adventures</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:border-emerald-300 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>View Gallery</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
    </section>
  );
};
