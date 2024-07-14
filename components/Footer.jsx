import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium mb-4">company</h4>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">about us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">our services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium mb-4">get help</h4>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">order status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium mb-4">online shop</h4>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">watch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">bag</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">shoes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">dress</a></li>
            </ul>
          </div>
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium mb-4">follow us</h4>
            <div className="social-links mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
