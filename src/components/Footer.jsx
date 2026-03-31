import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { assets } from "../assets/data.js";

export const Footer = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });

    // Whole footer animation
    sr.reveal(".footer-main", {
      origin: "bottom",
    });

    // Each column stagger animation
    sr.reveal(".footer-item", {
      origin: "bottom",
      interval: 200,
    });

    // Bottom bar
    sr.reveal(".footer-bottom", {
      origin: "bottom",
      delay: 300,
    });

  }, []);

  return (
    <footer className="bg-orange-50 border-t border-orange-100 footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="footer-item">
            <div className="flex items-center gap-2">
              <img src={assets.logoImg} alt="logo" className="w-12 h-12" />
              <h2 className="text-lg font-bold text-gray-800">Rentroo</h2>
            </div>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Your trusted car rental partner. Experience the freedom of the open road with Rentroo.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-blue-500 transition">
                <img src={assets.facebook} alt="Facebook" className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-pink-500 transition">
                <img src={assets.instagram} alt="Instagram" className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-sky-500 transition">
                <img src={assets.twitter} alt="Twitter" className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-blue-600 transition">
                <img src={assets.linkedin} alt="LinkedIn" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["About Us", "Contact Us", "Terms of Service", "Privacy Policy"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-orange-500 hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-item">
            <h3 className="text-gray-800 font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-500">Booking Guide</a></li>
              <li><a href="#" className="hover:text-orange-500">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-item">
            <h3 className="text-gray-800 font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe to get latest updates & offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-3 footer-bottom">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Rentroo. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-500">Terms</a>
            <a href="#" className="hover:text-orange-500">Privacy</a>
            <a href="#" className="hover:text-orange-500">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;