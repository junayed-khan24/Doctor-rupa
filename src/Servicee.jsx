import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsLungs } from "react-icons/bs";
import {
  FaHeartbeat,
  FaCapsules,
  FaCheckCircle,
} from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import { RiMentalHealthLine } from "react-icons/ri";

const Servicee = () => {

  // ✅ AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-gray-100 py-16 md:py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ================= Title ================= */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-12 text-accent"
        >
          Our Consulting Specialists
        </h2>

        {/* ================= Top Section ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          <div data-aos="zoom-in">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-[#021526]">
              <FaVirusCovid className="p-3 rounded-full text-primary bg-secondary text-6xl mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Covid-19 Test</h3>
              <p className="text-xs font-medium">
                Covid-19 testing helps detect infection early and prevents the spread of coronavirus worldwide.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-[#021526]">
              <BsLungs className="p-3 rounded-full text-primary bg-secondary text-6xl mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Lung Health</h3>
              <p className="text-xs font-medium">
                Comprehensive lung health assessments to detect and monitor respiratory conditions conditions.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-[#021526]">
              <FaCapsules className="p-3 rounded-full text-primary bg-secondary text-6xl mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Supplement</h3>
              <p className="text-xs font-medium">
                Dietary supplements provide essential vitamins and minerals to support overall health and immunity.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-[#021526]">
              <RiMentalHealthLine className="p-3 rounded-full text-primary bg-secondary text-6xl mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Mental Health</h3>
              <p className="text-xs font-medium">
                Comprehensive mental health assessments to detect and monitor psychological conditions.
              </p>
            </div>
          </div>
        </div>

       
        
      </div>
    </section>
  );
};

export default Servicee;
