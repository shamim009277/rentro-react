import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Businessman",
    image: "https://i.pravatar.cc/100?img=11",
    review: "Amazing service! Car was super clean and booking was very easy. Service was very good. Highly recommend Rentroo for anyone looking for a hassle-free car rental experience.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Traveler",
    image: "https://i.pravatar.cc/100?img=22",
    review: "Best rental experience ever. Smooth ride and great support!. I had a fantastic experience with Rentroo. The car was in excellent condition and the staff was very helpful throughout the process.",
    rating: 4,
  },
  {
    name: "Tanvir Hasan",
    role: "Student",
    image: "https://i.pravatar.cc/100?img=33",
    review: "Affordable price and excellent service. Highly recommended!. I had a wonderful experience with Rentroo. The booking process was seamless and the car was perfect for my trip.",
    rating: 5,
  },
  {
    name: "Sadia Islam",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=44",
    review: "The car was in great condition and the staff was very helpful. Highly recommend Rentroo for anyone looking for a hassle-free car rental experience.",
    rating: 4,
  },
  {
    name: "Rafiq Uddin",    
    role: "Engineer",
    image: "https://i.pravatar.cc/100?img=55",
    review: "I had a wonderful experience with Rentroo. The booking process was seamless and the car was perfect for my trip.",
    rating: 5,
  }
];

export const Testimonial = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      scale: 0.95,
      reset: false,
    });

    sr.reveal(".testimonial-title", {
      origin: "top",
      delay: 100,
    });

    sr.reveal(".testimonial-slider", {
      origin: "bottom",
      delay: 200,
    });

  }, []);

  return (
    <section className="bg-gray-50 py-0 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12">

        {/* Title */}
        <h2 className="testimonial-title text-3xl font-bold text-gray-800 mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mb-10">
          Real feedback from our happy customers
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-slider"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md 
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
                transition duration-500 border border-gray-100"
              >
                
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-4 border-orange-400 
                    group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Review */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  "{item.review}"
                </p>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <span className="text-xs text-gray-400">
                  {item.role}
                </span>

                {/* Rating */}
                <div className="flex justify-center mt-3 text-yellow-400 text-lg">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="group-hover:scale-125 transition">
                      ★
                    </span>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonial;