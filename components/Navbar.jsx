import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <button className="mr-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
          <a href="#" className="flex items-center">
            <img src="/twitter-icon.png" alt="Logo" className="w-8 h-8" />
            <span className="ml-2 font-bold">KTU GUIDE</span>
          </a>
        </div>
        <div className="hidden md:flex items-center flex-grow justify-center space-x-6">
          <ul className="flex space-x-4">
            <li><a href="#" className="block py-2 px-4">Home</a></li>
            <li className="relative group">
              <a href="#" className="block py-2 px-4">CSE</a>
              <ul className="hidden group-hover:block absolute bg-black text-white space-y-2 p-4">
                <li><a href="#" className="block py-2 px-4">S1</a></li>
                <li><a href="#" className="block py-2 px-4">S2</a></li>
                <li><a href="#" className="block py-2 px-4">S3</a></li>
                <li><a href="#" className="block py-2 px-4">S4</a></li>
                <li><a href="#" className="block py-2 px-4">S5</a></li>
                <li><a href="#" className="block py-2 px-4">S6</a></li>
                <li><a href="#" className="block py-2 px-4">S7</a></li>
                <li><a href="#" className="block py-2 px-4">S8</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="block py-2 px-4">ECE</a>
              <ul className="hidden group-hover:block absolute bg-black text-white space-y-2 p-4">
                <li><a href="#" className="block py-2 px-4">S1</a></li>
                <li><a href="#" className="block py-2 px-4">S2</a></li>
                <li><a href="#" className="block py-2 px-4">S3</a></li>
                <li><a href="#" className="block py-2 px-4">S4</a></li>
                <li><a href="#" className="block py-2 px-4">S5</a></li>
                <li><a href="#" className="block py-2 px-4">S6</a></li>
                <li><a href="#" className="block py-2 px-4">S7</a></li>
                <li><a href="#" className="block py-2 px-4">S8</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="block py-2 px-4">EEE</a>
              <ul className="hidden group-hover:block absolute bg-black text-white space-y-2 p-4">
                <li><a href="#" className="block py-2 px-4">S1</a></li>
                <li><a href="#" className="block py-2 px-4">S2</a></li>
                <li><a href="#" className="block py-2 px-4">S3</a></li>
                <li><a href="#" className="block py-2 px-4">S4</a></li>
                <li><a href="#" className="block py-2 px-4">S5</a></li>
                <li><a href="#" className="block py-2 px-4">S6</a></li>
                <li><a href="#" className="block py-2 px-4">S7</a></li>
                <li><a href="#" className="block py-2 px-4">S8</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <a href="#"><FaFacebook className="text-white" /></a>
          <a href="#"><FaTwitter className="text-white" /></a>
          <a href="#"><FaInstagram className="text-white" /></a>
          <a href="#"><FaTelegram className="text-white" /></a>
          <a href="#"><FaWhatsapp className="text-white" /></a>
        </div>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="space-y-2 p-4">
          <li><a href="#" className="block py-2 px-4">Home</a></li>
          <li className="relative group">
            <a href="#" className="block py-2 px-4">CSE</a>
            <ul className="hidden group-hover:block absolute bg-black text-white space-y-2 p-4">
              <li><a href="#" className="block py-2 px-4">S1</a></li>
              <li><a href="#" className="block py-2 px-4">S2</a></li>
              <li><a href="#" className="block py-2 px-4">S3</a></li>
              <li><a href="#" className="block py-2 px-4">S4</a></li>
              <li><a href="#" className="block py-2 px-4">S5</a></li>
              <li><a href="#" className="block py-2 px-4">S6</a></li>
              <li><a href="#" className="block py-2 px-4">S7</a></li>
              <li><a href="#" className="block py-2 px-4">S8</a></li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="block py-2 px-4">ECE</a>
            <ul className="hidden group-hover:block absolute bg-black text-white space-y-2 p-4">
              <li><a href="#" className="block py-2 px-4">S1</a></li>
              <li><a href="#" className="block py-2 px-4">S2</a></li>
              <li><a href="#" className="block py-2 px-4">S3</a></li>
              <li><a href="#" className="block py-2 px-4">S4</a></li>
              <li><a href="#" className="block py-2 px-4">S5</a></li>
              <li><a href="#" className="block py-2 px-4">S6</a></li>
              <li><a href="#" className="block py-2 px-4">S7</a></li>
              <li><a href="#" className="block py-2 px-4">S8</a></li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="block py-2 px-4">EEE</a>
            <ul className="hidden group-hover:block absolute bg-black text-white space-y-2 p-4">
              <li><a href="#" className="block py-2 px-4">S1</a></li>
              <li><a href="#" className="block py-2 px-4">S2</a></li>
              <li><a href="#" className="block py-2 px-4">S3</a></li>
              <li><a href="#" className="block py-2 px-4">S4</a></li>
              <li><a href="#" className="block py-2 px-4">S5</a></li>
              <li><a href="#" className="block py-2 px-4">S6</a></li>
              <li><a href="#" className="block py-2 px-4">S7</a></li>
              <li><a href="#" className="block py-2 px-4">S8</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
