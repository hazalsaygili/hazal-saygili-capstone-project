import React from 'react';
import './ZodiacReport.scss';

const ZodiacReport = ({ zodiacSign }) => {
  if (!zodiacSign) {
    return null;
  }

  return (
    <div className="zodiac-report">
      <h2 className="subtitle">Your Zodiac Sign: {zodiacSign.name}</h2>
      <p><strong>Element:</strong> {zodiacSign.element}</p>
      <p><strong>Ruling Planet:</strong> {zodiacSign.rulingplanet}</p>
      <p><strong>Traits:</strong> {zodiacSign.traits}</p>
      <p>{zodiacSign.description}</p>
    </div>
  );
};

export default ZodiacReport;
