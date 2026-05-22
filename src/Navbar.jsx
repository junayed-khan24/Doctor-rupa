import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="navbar bg-secondary/90 backdrop-blur sticky top-0 z-50 px-4 sm:px-6 lg:px-16"
    >
      {/* ===== Left Logo ===== */}
      <div
      data-aos="fade-down"
      className="navbar-start">
        <a className="text-xl sm:text-2xl font-bold text-primary">
          oxcare
        </a>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
      data-aos="fade-in"
      className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 text-gray-700 space-y-1"
          >
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Doctors</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>

            <div className="pt-2 border-t">
             
              <button className="btn btn-success btn-sm w-full text-white">
                Contact
              </button>
            </div>
          </ul>
        </div>
      </div>

      {/* ===== Desktop Menu ===== */}
      <div 
      data-aos="fade-down"
      className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 xl:gap-6 text-gray-700 font-medium">
          <li><a className="hover:text-primary transition">Home</a></li>
          <li><a className="hover:text-primary transition">About</a></li>
          <li><a className="hover:text-primary transition">Doctors</a></li>
          <li><a className="hover:text-primary transition">Services</a></li>
          <li><a className="hover:text-primary transition">Contact</a></li>
        </ul>
      </div>

      {/* ===== Right Buttons ===== */}
      <div 
      data-aos="fade-down"
      className="navbar-end gap-2 hidden lg:flex">
      
        <button className="btn btn-primary rounded-full text-white hover:bg-white hover:text-primary px-6 md:px-8">
           contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;