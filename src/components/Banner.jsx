import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/data";

const Banner = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // 20% দেখা গেলে trigger হবে
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div ref={ref} className="mx-auto relative">
        
        {/* Background Box */}
        <div className="bg-sky-500 rounded-xl px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">

          {/* Car Image */}
          <div
            className={`w-full md:w-1/2 relative z-10 transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
          `}
          >
            <img
              src={assets.banner}
              alt="car"
              width="500"
              height="300"
              className="w-full max-w-lg mx-auto md:ml-0 drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 text-white text-center md:text-left mt-10 md:mt-0 z-10 transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
          `}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
              Buy With Confidence, Rent Without Worry
            </h2>

            <p className="text-sm md:text-base text-white/90 mb-6 max-w-md mx-auto md:mx-0">
              Find your next ride or earn from your vehicle in minutes. We handle insurance, driver verification and secure payments.
            </p>

            <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium 
              hover:bg-gray-100 hover:scale-105 active:scale-95 transition duration-300 shadow-lg">
              Explore cars
            </button>
          </div>

          {/* Decorative Blur */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        </div>
      </div>
    </section>
  );
};

export default Banner;