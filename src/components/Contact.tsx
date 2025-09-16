import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    event: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        event: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@johnnyeliades.com",
      action: "mailto:info@johnnyeliades.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+27 (0) 86 107 3282",
      action: "tel:+270861073282"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "46 Arbroath Road, Bedfordview Johannesburg OR 166 Main Road,  Paarl Capetown OR 309 Stateway Welkom, Freestate",
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join the Power Up 365 community? Register for upcoming events or get in touch to learn more about our networking opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Register for Events</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We'll be in touch soon with event details and next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Interest *
                    </label>
                    <select
                      id="event"
                      name="event"
                      required
                      value={formData.event}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select</option>
                      <option value="september-2025">Power Up 365 - September Edition (23 September 2025)</option>
                     
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your networking goals or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    Send Registration
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-red-600 text-white p-3 rounded-lg">
                    <info.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-red-600 text-white rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3">Why Choose Power Up 365?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  Premium networking opportunities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  Exclusive industry insights
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  Quality refreshments included
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  Professional development focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;