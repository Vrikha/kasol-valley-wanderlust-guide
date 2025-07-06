
export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏔️</span>
              <span className="text-xl font-bold">Kasol Journeys</span>
            </div>
            <p className="text-green-200 mb-4">
              Your trusted partner for authentic Himachali experiences in the beautiful Parvati Valley.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <span className="text-sm">📷</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-green-200">
              <li className="hover:text-white cursor-pointer transition-colors">Bike Rentals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Scooty Rentals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Taxi Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Guest Houses</li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-green-200">
              <li className="hover:text-white cursor-pointer transition-colors">Tosh Village</li>
              <li className="hover:text-white cursor-pointer transition-colors">Chalal Village</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kheerganga Trek</li>
              <li className="hover:text-white cursor-pointer transition-colors">Manikaran Sahib</li>
              <li className="hover:text-white cursor-pointer transition-colors">Grahan Village</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-green-200">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 7018227528</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>kasoljourney@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Old Kasol, Himachal Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Kasol Journeys. All rights reserved. | Made with ❤️ for travelers and backpackers
          </p>
        </div>
      </div>
    </footer>
  );
};
