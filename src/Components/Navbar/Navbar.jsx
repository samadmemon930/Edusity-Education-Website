import { useState } from "react";
import logo from "../../assets/images/logo.png";
import menu_icon from "../../assets/images/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="nav-container container">
      <img src={logo} alt="Logo" className="logo" />

      {/* SAME UL + SAME CLASS */}
      <ul className={mobileMenu ? "show-menu" : "hide-mobile-menu"}>
        <li><a href="#home" onClick={() => setMobileMenu(false)}>Home</a></li>
        <li><a href="#program" onClick={() => setMobileMenu(false)}>Program</a></li>
        <li><a href="#about" onClick={() => setMobileMenu(false)}>About Us</a></li>
        <li><a href="#campus" onClick={() => setMobileMenu(false)}>Campus</a></li>
        <li><a href="#testimonial" onClick={() => setMobileMenu(false)}>Testimonial</a></li>
        <li>
          <button className="btn">
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact Us</a>
          </button>
        </li>
      </ul>

      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      />
    </nav>
  );
};

export default Navbar;
