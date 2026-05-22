import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import junayed from "../src/assets/pngtree-photo-men-doctor-physici.png"

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-primary text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== Top Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ========= Column 1 ========= */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">oxcare</h2>

            <p className="text-sm text-gray-200 leading-relaxed mb-4">
              We provide trusted and modern healthcare services with advanced
              technology and experienced doctors to ensure the best treatment
              and patient satisfaction.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <button className="btn btn-circle btn-sm bg-white text-primary hover:scale-110 transition">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle btn-sm bg-white text-primary hover:scale-110 transition">
                <FaTwitter />
              </button>
              <button className="btn btn-circle btn-sm bg-white text-primary hover:scale-110 transition">
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* ========= Column 2 ========= */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>

            <ul className="space-y-2 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Our Team</li>
            </ul>
          </div>

          {/* ========= Column 3 ========= */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4">Address</h3>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Mymensingh,Bangladesh&output=embed"
                className="w-full h-40 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-white/30 my-8"></div>

        {/* ===== Bottom ===== */}
        <div
          data-aos="fade-in"
          className="text-center text-xl text-black  "
        >
          © 2022 All Rights Reserved
        </div>

        <a href="https://junayedkhan.me" target="_blank" rel="noopener noreferrer">
          <div>
              <div className="flex justify-center mt-4">
           <button className="btn btn-link text-white hover:text-gray-500 border-white underline-none" >
              Developed by Junayed Khan <img src={junayed} alt="junayed" className="h-6 w-6 rounded-full" />
              </button>
            </div>
          </div>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
