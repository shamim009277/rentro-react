import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";

const Support = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const stats = [
    { value: 500, suffix: "+", label: "Premium Cars" },
    { value: 50, suffix: "+", label: "Locations" },
    { value: 24, suffix: "/7", label: "Support" },
    { value: 90, suffix: "%", label: "Satisfaction" },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    // Scroll reveal (UI animation)
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false,
    });

    sr.reveal(".support-title", { origin: "top", delay: 100 });
    sr.reveal(".support-subtitle", { origin: "top", delay: 200 });
    sr.reveal(".support-card", {
      origin: "bottom",
      interval: 150,
    });

    // 👇 Intersection Observer (trigger when in view)
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          stats.forEach((item, index) => {
            let start = 0;
            const end = item.value;

            const duration = 1500;
            const stepTime = Math.max(10, Math.floor(duration / end));

            const counter = setInterval(() => {
              start += 1;

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });

              if (start === end) {
                clearInterval(counter);
              }
            }, stepTime);
          });
        }
      },
      {
        threshold: 0.3, // 30% visible হলেই trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-50"
    >
      <div className="max-w-7xl mx-auto text-center py-12">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="support-title text-3xl sm:text-4xl font-bold text-sky-700">
            Why Choose Us
          </h2>
          <p className="support-subtitle text-gray-600 mt-2">
            Trusted by thousands of customers worldwide
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="support-card bg-white rounded-2xl p-6 shadow-md border border-sky-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-600">
                {counts[index]}
                {item.suffix}
              </h2>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Support;