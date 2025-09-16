import React from 'react';
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every event is designed with a clear goal: to create meaningful connections that drive business success and personal growth.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of community. Our network is built on mutual support, collaboration, and shared success.",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Stay ahead of the curve with insights into the latest trends, technologies, and business strategies from industry leaders.",
      color: "text-blue-600"
    },
    {
      icon: Trophy,
      title: "Excellence Standard",
      description: "We maintain the highest standards in every aspect of our events, from venue selection to speaker curation.",
      color: "text-red-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-900 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Power Up 365
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're more than just networking events. We're a catalyst for business transformation and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Empowering Business Leaders Since Day One
            </h3>
            <div className="space-y-4 text-blue-100 text-lg leading-relaxed">
              <p>
                Power Up 365 was born from a simple yet powerful vision: to create a premium networking platform where ambitious business leaders, entrepreneurs, and professionals could connect, collaborate, and catalyze each other's success.
              </p>
              <p>
                Our carefully curated events bring together like-minded individuals who are committed to excellence, innovation, and meaningful professional relationships. We understand that great business isn't just about what you know—it's about who you know and how you can mutually support each other's growth.
              </p>
              <p>
                From intimate roundtable discussions to large-scale conferences, every Power Up 365 event is designed to maximize value, foster genuine connections, and create opportunities that extend far beyond the event itself.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-red-600/20 z-10"></div>
              <img
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Business networking event"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-2xl font-bold text-blue-600">365</div>
              <div className="text-sm text-gray-600">Days of Power</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-2xl font-bold text-red-600">100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 ${value.color}`}>
                <value.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-blue-100 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Power Up Your Network?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join thousands of successful professionals who have transformed their careers and businesses through our exclusive networking events.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;