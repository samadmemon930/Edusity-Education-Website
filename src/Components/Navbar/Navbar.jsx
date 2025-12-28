import { Link } from "react-router-dom";
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
        <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/program" onClick={closeMenu}>Program</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/campus" onClick={closeMenu}>Campus</Link></li>
        <li><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></li>
        <li>
          <button className="btn">
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
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
