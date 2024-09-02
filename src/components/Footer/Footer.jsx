import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo--container">
        <img
          src="/logo/crystalsilverlogo.png"
          alt="crystalsilverlogo"
          className="crystalsilver_logo"
        />
        {/* <NavLink to="/" className="logo">
          COSMO APP
        </NavLink> */}
      </div>
      {/* <div className="footer-links">
        <NavLink to="/about" activeClassName="active">
          ABOUT US
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          CONTACT
        </NavLink>
      </div> */}
    </footer>
  );
};

export default Footer;
