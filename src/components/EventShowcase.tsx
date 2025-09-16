import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const EventShowcase = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Power Up 365 - September Edition",
      date: "23 September 2025",
      time: "9am to 10:30am",
      location: "166 Main Road Paarl Capetown",
      attendees: 30,
      price: "R350",
      description: "Join us for an morningof powerful networking, inspiring conversations, and meaningful connections that will elevate your business to new heights.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true
    },
    // {
    //   id: 2,
    //   title: "Leadership Excellence Workshop",
    //   date: "15 October 2025",
    //   time: "19:00 - 22:00",
    //   location: "Johannesburg CBD",
    //   attendees: 100,
    //   price: "R400",
    //   description: "Develop your leadership skills while building valuable connections with fellow business leaders and entrepreneurs.",
    //   image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    //   featured: false
    // },
    // {
    //   id: 3,
    //   title: "Innovation & Technology Summit",
    //   date: "22 November 2025",
    //   time: "17:30 - 20:30",
    //   location: "Sandton Convention Centre",
    //   attendees: 200,
    //   price: "R500",
    //   description: "Explore the latest in business technology and innovation while networking with industry pioneers and thought leaders.",
    //   image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    //   featured: false
    // }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Power Up</span> Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business network with our carefully curated events designed to foster meaningful connections and drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Event */}
          <div className="lg:col-span-2">
            {upcomingEvents
              .filter(event => event.featured)
              .map((event) => (
                <div key={event.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-red-700/50 z-10"></div>
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured Event
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                        {event.title}
                      </h3>
                      <div className="text-3xl font-bold text-blue-700">
                        {event.price}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="mr-2 text-blue-600" size={20} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="mr-2 text-blue-600" size={20} />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="mr-2 text-blue-600" size={20} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="mr-2 text-blue-600" size={20} />
                        <span className="text-sm">{event.attendees} seats</span>
                      </div>
                    </div>

                    <button 
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Register Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Other Events */}
          {upcomingEvents
            .filter(event => !event.featured)
            .map((event) => (
              <div key={event.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-red-700/40 z-10"></div>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <div className="text-xl font-bold text-blue-700">
                      {event.price}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-2 text-blue-600" size={16} />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-2 text-blue-600" size={16} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-2 text-blue-600" size={16} />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-300 text-sm"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default EventShowcase;