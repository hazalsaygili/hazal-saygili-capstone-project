import React from 'react';
import './AstrologyReport.scss';

const AstrologyReport = ({ zodiacSign }) => {
  if (!zodiacSign) {
    return null;
  }

  return (
    <div className="astrology-report">
      <h2 className="subtitle">Your Zodiac Sun Sign: {zodiacSign.name}</h2>
      <p><strong>Element:</strong> {zodiacSign.element}</p>
      <p><strong>Ruling Planet:</strong> {zodiacSign.rulingplanet}</p>
      <p><strong>Traits:</strong> {zodiacSign.traits}</p>
      <p>{zodiacSign.description}</p>
    </div>
  );
};

export default AstrologyReport;
