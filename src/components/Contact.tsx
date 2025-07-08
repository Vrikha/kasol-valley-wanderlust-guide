
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    dates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddressClick = () => {
    window.open('https://www.google.com/search?sca_esv=97d2e28a3f4a1e73&biw=1536&bih=695&sxsrf=AE3TifMx6I13Akke5RBqWd66dtYXVRZmYA:1751911307344&q=purple+house+kasol&source=lnms&fbs=AIIjpHwp1L2GRK7sUfajUN01ixwI5Y0Kl82XKWF6MtfPR1D8ny86IOVtOZZpwQkQU-EfERbXnK00KBhK1AYOL6JET_l63jHzcU_x3rLk_K0aU2-_kXb_wBP5Q7K6uFLZb-P57jSq85ttYm7h6ft9imoob_uSkAw8pUYY06uAfSfvjn5hb0R8Mho_rd6TF4ErKlzurrlnlFe68Os2rx1qZfnTX4bL_549RZtPdKJ5oH9XTMaMLevZHl4&sa=X&ved=2ahUKEwiP2ZuZqquOAxUo7jgGHYiMEOIQ0pQJegQICRAB', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:kasoljourney@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Contact Us</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Ready to start your Kasol adventure? Get in touch with us for bookings, 
            enquiries, or any assistance you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="p-8 bg-white border-2 border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">👤</div>
                <div>
                  <h4 className="font-semibold text-green-700">Contact Person</h4>
                  <p className="text-gray-600">Rakesh Bodh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-semibold text-green-700">Phone</h4>
                  <p className="text-gray-600">+91 7018227528</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🏠</div>
                <div>
                  <h4 className="font-semibold text-green-700">Booking Phone (Delight & Purple House)</h4>
                  <p className="text-gray-600">+91 8219191758</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h4 className="font-semibold text-green-700">Email</h4>
                  <p 
                    className="text-gray-600 cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                    onClick={handleEmailClick}
                  >
                    kasoljourney@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold text-green-700">Address</h4>
                  <p 
                    className="text-gray-600 cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                    onClick={handleAddressClick}
                  >
                    Purple House Kasol, Old Kasol, Himachal Pradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Why Choose Kasol Journeys?</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Local expertise and knowledge</li>
                <li>• 24/7 customer support</li>
                <li>• Authentic Himachali experience</li>
                <li>• Competitive pricing</li>
                <li>• Trusted by thousands of travelers</li>
              </ul>
            </div>
          </Card>

          {/* Enquiry Form */}
          <Card className="p-8 bg-white border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Send Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="bike-rental">Bike Rental</option>
                  <option value="scooty-rental">Scooty Rental</option>
                  <option value="taxi-service">Taxi Service</option>
                  <option value="guest-house">Guest House Booking</option>
                  <option value="package">Complete Package</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 15-20 Dec 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Enquiry
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
