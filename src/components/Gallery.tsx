import React, { useState, useEffect } from "react";
import { Users, Award, Handshake, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryImages = [
    { url: "/images/273902548_5052441761544887_2430982180954087108_n.png", title: "Networking Excellence", description: "Business leaders connecting and sharing insights" },
    { url: "/images/rghaereAgb.jpg", title: "Leadership Development", description: "Workshops that transform careers" },
    { url: "/images/484639495_9495067363948949_5416642609132452237_n.jpg", title: "Strategic Partnerships", description: "Building relationships that last" },
    { url: "/images/480864966_1295812691890915_4203671247065064147_n.jpg", title: "Growth Opportunities", description: "Finding new paths" },
    { url: "/images/480638418_1294892118649639_4259016951906066535_n.jpg", title: "Team Spirit", description: "Working together for impact" },
    { url: "/images/480613564_1296339361838248_5063664708312363969_n.jpg", title: "Visionaries", description: "Leaders shaping tomorrow" },
    { url: "/images/484852791_9490088017780217_8840341404868612777_n.jpg", title: "Celebration", description: "Marking special achievements" },
    { url: "/images/483578158_9468173329971686_3610048025095300732_n.jpg", title: "Networking Night", description: "Forging lasting bonds" },
    { url: "/images/484076049_9491009767688042_1529763313461081923_n.jpg", title: "Collaboration Hub", description: "Where ideas connect" },
    { url: "/images/484551655_9491025044353181_440848629133577576_n.jpg", title: "Celebration Time", description: "Recognizing great milestones" },
    { url: "/images/480693509_1295558345249683_4973849057085153958_n.jpg", title: "Bright Futures", description: "Empowering ambitions" },
    { url: "/images/481072598_1294890431983141_7862122305040389690_n.jpg", title: "Connections", description: "Meaningful professional ties" },
    { url: "/images/482090993_1309360770536107_8994249127136191219_n.jpg", title: "Innovation Sparks", description: "Moments of inspiration" },
    { url: "/images/480693786_1295555395249978_7757398065518497655_n.jpg", title: "Collaboration Path", description: "Building shared success" },
    { url: "/images/490948884_1346539263484924_855100012154673493_n.jpg", title: "Global Reach", description: "Expanding horizons" },
    { url: "/images/484869625_9495067403948945_1927867081136447748_n.jpg", title: "Memorable Events", description: "Creating lasting memories" },
  ];

  const stats = [
    { icon: Users, value: "2,500+", label: "Network Members", color: "text-blue-600" },
    { icon: Award, value: "150+", label: "Events Hosted", color: "text-red-600" },
    { icon: Handshake, value: "5,000+", label: "Connections Made", color: "text-blue-600" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience the <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Power</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the energy, connections, and success stories from our networking events that transform careers and businesses.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.title}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {galleryImages[currentImage].title}
              </h3>
              <p className="text-gray-200 text-lg">
                {galleryImages[currentImage].description}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer group ${index === currentImage ? "ring-4 ring-blue-500" : ""}`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
