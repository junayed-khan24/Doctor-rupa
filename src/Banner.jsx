import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import doctorImg from "../src/assets/pngtree-photo-men-doctor-physici.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-sky-400 to-sky-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
          
          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={doctorImg}
              alt="Doctor"
              className="w-full max-w-md object-cover rounded-3xl drop-shadow-2xl"
            />
          </div>

          {/* Content Section */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              We pour love <br />
              and care in every <br />
              Patient.
            </h1>

            <p className="py-6 text-sm md:text-base text-gray-100 max-w-lg mx-auto lg:mx-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour or random words which don't look even slightly
              believable.
            </p>

            <button className="btn bg-blue-700 hover:bg-blue-800 border-none text-white px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
              Get Appointment
            </button>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              
              <div
                data-aos="zoom-in"
                className="bg-white text-black rounded-2xl p-5 shadow-xl hover:-translate-y-2 transition duration-500 "
              >
                <h2 className="text-2xl font-bold text-blue-600">250K+</h2>
                <p className="text-sm font-medium">Happy Patients</p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-white text-black rounded-2xl p-5 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-600">120+</h2>
                <p className="text-sm font-medium">Expert Doctors</p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="bg-white text-black rounded-2xl p-5 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-600">15 Years</h2>
                <p className="text-sm font-medium">Experience</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;