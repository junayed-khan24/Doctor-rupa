import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <a className="hover:text-blue-600 transition duration-300 font-medium">
          Home
        </a>
      </li>

      <li>
        <a className="hover:text-blue-600 transition duration-300 font-medium">
          Services
        </a>
      </li>

      <li>
        <a className="hover:text-blue-600 transition duration-300 font-medium">
          Doctors
        </a>
      </li>

      <li>
        <a className="hover:text-blue-600 transition duration-300 font-medium">
          About Us
        </a>
      </li>
    </>
  );

  return (
    <div className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8 py-3">
        
        {/* Left Logo */}
        <div className="navbar-start">
          <a className="text-2xl md:text-3xl font-extrabold tracking-wide text-black">
            MEDICARE
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-black">
            {navLinks}
          </ul>
        </div>

        {/* Right Button */}
        <div className="navbar-end hidden lg:flex">
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-8 rounded-xl shadow-md hover:scale-105 transition duration-300">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-black"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="menu bg-base-100 px-6 py-4 gap-3 text-black">
          {navLinks}

          <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none mt-4 rounded-xl">
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;