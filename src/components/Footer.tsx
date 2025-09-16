import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Users, Calendar, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Upcoming Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const upcomingEvents = [
    { date: 'Sept 17, 2025', name: 'Power Up 365 - September Edition', location: '46 Arbroath Road, Bedfordview' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-4">
              Power Up 365
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering business leaders through premium networking events that create lasting connections and drive success.
            </p>
            
            <div className="flex space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Users size={24} className="text-blue-400" />
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <Calendar size={24} className="text-red-400" />
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <Award size={24} className="text-blue-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Upcoming Events</h4>
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="border-l-2 border-blue-500 pl-3">
                  <div className="text-blue-400 text-sm font-semibold">{event.date}</div>
                  <div className="text-white text-sm font-medium">{event.name}</div>
                  <div className="text-gray-400 text-xs">{event.location}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="mt-1 text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <a 
                    href="mailto:Info@johnnyeliades.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Info@johnnyeliades.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="mt-1 text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <a 
                    href="tel:+27111234567"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +27 (0) 86 107 3282
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 text-blue-400 flex-shrink-0" size={18} />
                <div className="text-gray-300 text-sm">
                  46 Arbroath Road, Bedfordview
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ExternalLink className="mt-1 text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <a 
                    href="https://iecca.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    iecca.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Power Up 365. All rights reserved.
            </div>
            
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Developed by {' '}
              <a
                href="https://www.linkedin.com/in/emmanuel-kaome-0247b7224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Emmanuel Kaome
              </a>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;