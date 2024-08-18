import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        COSMO APP
      </NavLink>
      <div className="nav-links">
        <NavLink to="/numerology" activeClassName="active">
          NUMEROLOGY REPORT
        </NavLink>
        <NavLink to="/astrology" activeClassName="active">
          ASTROLOGY REPORT
        </NavLink>
        <NavLink to="/chakras" activeClassName="active">
          CHAKRAS
        </NavLink>
        <NavLink to="/crystals" activeClassName="active">
          CRYSTALS
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
