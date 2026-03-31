import React from "react";
import { MapPin, Clock, Search, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 text-center text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="car background"
          className="w-full h-full object-cover scale-110 animate-slowZoom"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Find Your Perfect{" "}
          <span className="text-yellow-400">Rental Car</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Discover the best deals on rental cars for your next adventure. Book now and drive with confidence!
        </p>

        {/* Search Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-white">

          {/* Pickup Location */}
          <div className="text-left">
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              Pickup Location
            </label>
            <select className="w-full p-2 bg-white/10 border border-white/20 rounded text-white">
              <option className="text-black">Select Location</option>
              <option className="text-black">New York</option>
              <option className="text-black">Los Angeles</option>
            </select>
          </div>

          {/* Pickup Date */}
          <div className="text-left">
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Calendar className="w-5 h-5 text-yellow-400" />
              Pickup Date
            </label>
            <input type="date" className="w-full p-2 bg-white/10 border border-white/20 rounded" />
          </div>

          {/* Pickup Time */}
          <div className="text-left">
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              Pickup Time
            </label>
            <input type="time" className="w-full p-2 bg-white/10 border border-white/20 rounded" />
          </div>

          {/* Return Date */}
          <div className="text-left">
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Calendar className="w-5 h-5 text-yellow-400" />
              Return Date
            </label>
            <input type="date" className="w-full p-2 bg-white/10 border border-white/20 rounded" />
          </div>

          {/* Button */}
          <div>
            <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 transition flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;