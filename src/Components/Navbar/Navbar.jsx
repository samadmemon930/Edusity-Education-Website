import { useState } from "react";
import logo from "../../assets/images/logo.png";
import menu_icon from "../../assets/images/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className="nav-container container">
      <img src={logo} alt="Logo" className="logo" />

      <ul className={mobileMenu ? "show-menu" : "hide-mobile-menu"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#program" onClick={closeMenu}>Program</a></li>
        <li><a href="#about" onClick={closeMenu}>About Us</a></li>
        <li><a href="#campus" onClick={closeMenu}>Campus</a></li>
        <li><a href="#testimonial" onClick={closeMenu}>Testimonial</a></li>
        <li>
          <button className="btn">
            <a href="#contact" onClick={closeMenu}>Contact Us</a>
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
