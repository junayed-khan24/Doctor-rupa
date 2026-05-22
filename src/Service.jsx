import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaUserMd,
  FaCalendarCheck,
  FaHospitalUser,
} from "react-icons/fa";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Virtual Consultation",
      icon: <FaUserMd />,
      desc: "Get expert medical advice from the comfort of your home with professional online consultation services.",
      img: "https://i.ibb.co.com/jv1P4XH/doctor1.jpg",
      active: false,
    },

    {
      id: 2,
      title: "Make Appointment",
      icon: <FaCalendarCheck />,
      desc: "Book your doctor appointment quickly and easily with our smart scheduling system.",
      img: "https://i.ibb.co.com/9vM5h4g/doctor2.jpg",
      active: true,
    },

    {
      id: 3,
      title: "Online Pharmacy",
      icon: <FaHospitalUser />,
      desc: "Order medicines online and get fast home delivery with trusted pharmacy support.",
      img: "https://i.ibb.co.com/fxJf9Yz/doctor3.jpg",
      active: false,
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our Online Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              className={`rounded-2xl border shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                service.active
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-black border-gray-200"
              }`}
            >
              
              {/* Content */}
              <div className="p-6">
                
                <div
                  className={`text-4xl mb-4 ${
                    service.active ? "text-white" : "text-blue-600"
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-7 ${
                    service.active ? "text-gray-100" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>
              </div>

              {/* Image */}
              <figure className="px-5 pb-5">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-xl h-40 w-full object-cover hover:scale-105 transition duration-500"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;