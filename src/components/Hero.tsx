import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "UNLEASH YOUR GREATNESS",
      subtitle: "Transform Your Business Network",
      description: "Connect with like-minded entrepreneurs and business leaders in an inspiring environment designed for growth and success.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "FIND YOUR TRUE SELF",
      subtitle: "Discover New Opportunities", 
      description: "Join our exclusive networking events where meaningful connections lead to extraordinary business outcomes.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "UNDERSTAND YOUR SUCCESS",
      subtitle: "Build Lasting Partnerships",
      description: "Experience premium networking events that combine professional development with genuine relationship building.",
      image: "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-red-700/60 z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[5000ms]"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl break-words">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-snug md:leading-tight lg:leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-4 sm:mb-6 leading-snug">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 animate-fade-in-up delay-300">
              <button 
                onClick={() => scrollToSection('events')}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                View Upcoming Events
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            {/* Next Event Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 animate-fade-in-up delay-500">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Next Event:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center text-blue-200">
                  <Calendar className="mr-2" size={20} />
                  <span>23 September 2025</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <MapPin className="mr-2" size={20} />
                  <span>166 Main Road, Paarl, Capetown</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Users className="mr-2" size={20} />
                  <span>R350 per person</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
