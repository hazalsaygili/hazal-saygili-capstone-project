import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-item">
            <h2>NUMEROLOGY CALCULATION</h2>
            <p>Discover your numerology report by entering your full name and birthdate. Learn about your life path, destiny number, and more.</p>
            <NavLink to="/numerology">Explore</NavLink>
          </div>
          <div className="hero-item">
            <h2>ASTROLOGY CALCULATION</h2>
            <p>Find out your astrological sign and understand its influence on your life. Discover more about your horoscope.</p>
            <NavLink to="/astrology">Explore</NavLink>
          </div>
          <div className="hero-item">
            <h2>CHAKRAS</h2>
            <p>Learn about the seven chakras, their functions, and balancing mudras. Explore how to balance your energy.</p>
            <NavLink to="/chakras">Explore</NavLink>
          </div>
          <div className="hero-item">
            <h2>CRYSTALS</h2>
            <p>Browse our collection of crystals, their healing properties, and how they can benefit your well-being.</p>
            <NavLink to="/crystals">Explore</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
