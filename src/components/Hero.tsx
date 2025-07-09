
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/8f5a1470-e2c9-457e-b891-16c2a993e129.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Keep calm & travelling On
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Experience the mystical Parvati Valley with premium services
          </p>
          
          {/* Search/Booking Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Kasol, Himachal Pradesh</option>
                  <option>Tosh Village</option>
                  <option>Malana Village</option>
                  <option>Kheerganga Trek</option>
                </select>
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
