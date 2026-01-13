import React from "react";
import {Link} from "react-router-dom"
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section container">
      <div className="footer">
        <p>© 2025 Edusity. All rights reserved.</p>

        <ul>
          <li><Link to="/">Terms of Services</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
