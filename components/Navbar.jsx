import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDepartment(null); // Close active department when toggling menu
  };

  const toggleDepartment = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveDepartment(index === activeDepartment ? null : index);
  };

  return (
    <header className="bg-purple-800 text-white relative">
      <div className="top-bar flex justify-between items-center px-4 py-2">
        <div className="left flex items-center">
          <div className="menu-button cursor-pointer" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <a href="#" className="mainlogo flex items-center">
              <img className="logo" src="twitter-icon.png" alt="Logo" />
              <p className="name">KTU GUIDE</p>
            </a>
          </div>
        </div>
        <div className="right flex items-center">
          <ul className="social-icons flex list-none">
            <li className="siconsdiv">
              <a href="#">
                <img className="sicons" src="facebook-icon.png" alt="Facebook" />
              </a>
            </li>
            <li className="siconsdiv">
              <a href="#">
                <img className="sicons" src="twitter-icon.png" alt="Twitter" />
              </a>
            </li>
            <li className="siconsdiv">
              <a href="#">
                <img className="sicons" src="instagram-icon.png" alt="Instagram" />
              </a>
            </li>
            <li className="siconsdiv">
              <a href="#">
                <img className="sicons" src="telegram-icon.png" alt="Telegram" />
              </a>
            </li>
            <li className="siconsdiv">
              <a href="#">
                <img className="sicons" src="whatsapp-icon.png" alt="WhatsApp" />
              </a>
            </li>
          </ul>
          <div className="contributediv">
            <button className="contribute-button" data-target="#contribute-modal">
              Contribute
            </button>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li className="has-dropdown">
            <a href="#">Home</a>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#" onClick={(e) => toggleDepartment(e, 0)} className="cursor-pointer">
              CSE
            </a>
            <ul className={`dropdown ${activeDepartment === 0 ? 'block' : 'hidden'}`}>
              <li><a href="#">S1</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S2</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S3</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S4</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S5</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S6</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S7</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S8</a></li>
              <hr className="web1" />
            </ul>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#" onClick={(e) => toggleDepartment(e, 1)} className="cursor-pointer">
              ECE
            </a>
            <ul className={`dropdown ${activeDepartment === 1 ? 'block' : 'hidden'}`}>
              <li><a href="#">S1</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S2</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S3</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S4</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S5</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S6</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S7</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S8</a></li>
              <hr className="web1" />
            </ul>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#" onClick={(e) => toggleDepartment(e, 2)} className="cursor-pointer">
              EEE
            </a>
            <ul className={`dropdown ${activeDepartment === 2 ? 'block' : 'hidden'}`}>
              <li><a href="#">S1</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S2</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S3</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S4</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S5</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S6</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S7</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S8</a></li>
              <hr className="web1" />
            </ul>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#" onClick={(e) => toggleDepartment(e, 3)} className="cursor-pointer">
              CIVIL
            </a>
            <ul className={`dropdown ${activeDepartment === 3 ? 'block' : 'hidden'}`}>
              <li><a href="#">S1</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S2</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S3</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S4</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S5</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S6</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S7</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S8</a></li>
              <hr className="web1" />
            </ul>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#" onClick={(e) => toggleDepartment(e, 4)} className="cursor-pointer">
              MECH
            </a>
            <ul className={`dropdown ${activeDepartment === 4 ? 'block' : 'hidden'}`}>
              <li><a href="#">S1</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S2</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S3</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S4</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S5</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S6</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S7</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S8</a></li>
              <hr className="web1" />
            </ul>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#" onClick={(e) => toggleDepartment(e, 5)} className="cursor-pointer">
              IT
            </a>
            <ul className={`dropdown ${activeDepartment === 5 ? 'block' : 'hidden'}`}>
              <li><a href="#">S1</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S2</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S3</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S4</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S5</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S6</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S7</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">S8</a></li>
              <hr className="web1" />
            </ul>
          </li>
          <hr className="web" />
          <li className="has-dropdown">
            <a href="#">More</a>
            <ul className="dropdown">
              <li><a href="#">Contact</a></li>
              <hr className="mobile" />
              <hr className="web1" />
              <li><a href="#">About</a></li>
              <hr className="web1" />
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
