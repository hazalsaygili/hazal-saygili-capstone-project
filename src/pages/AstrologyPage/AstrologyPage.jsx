import React, { useState } from 'react';
import AstrologyForm from '../../components/AstrologyForm/AstrologyForm';
import ZodiacReport from '../../components/AstrologyReport/AstrologyReport';
import astrologyData from '../../data/Astrology.json';
import './AstrologyPage.scss';

const AstrologyPage = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [zodiacSign, setZodiacSign] = useState(null);

  const handleFormSubmit = () => {
    if (day && month && year) {
      const zodiac = getAstrologySign(parseInt(day), parseInt(month));
      const signData = astrologyData.find(sign => sign.name.toLowerCase() === zodiac.toLowerCase());
      setZodiacSign(signData);
    }
  };

  const getAstrologySign = (birthDay, birthMonth) => {
    let newSign = '';
    if (
      (birthMonth === 3 && birthDay >= 21) ||
      (birthMonth === 4 && birthDay <= 19)
    ) {
      newSign = "Aries";
    } else if (
      (birthMonth === 4 && birthDay >= 20) ||
      (birthMonth === 5 && birthDay <= 20)
    ) {
      newSign = "Taurus";
    } else if (
      (birthMonth === 5 && birthDay >= 21) ||
      (birthMonth === 6 && birthDay <= 20)
    ) {
      newSign = "Gemini";
    } else if (
      (birthMonth === 6 && birthDay >= 21) ||
      (birthMonth === 7 && birthDay <= 22)
    ) {
      newSign = "Cancer";
    } else if (
      (birthMonth === 7 && birthDay >= 23) ||
      (birthMonth === 8 && birthDay <= 22)
    ) {
      newSign = "Leo";
    } else if (
      (birthMonth === 8 && birthDay >= 23) ||
      (birthMonth === 9 && birthDay <= 22)
    ) {
      newSign = "Virgo";
    } else if (
      (birthMonth === 9 && birthDay >= 23) ||
      (birthMonth === 10 && birthDay <= 22)
    ) {
      newSign = "Libra";
    } else if (
      (birthMonth === 10 && birthDay >= 23) ||
      (birthMonth === 11 && birthDay <= 21)
    ) {
      newSign = "Scorpio";
    } else if (
      (birthMonth === 11 && birthDay >= 22) ||
      (birthMonth === 12 && birthDay <= 21)
    ) {
      newSign = "Sagittarius";
    } else if (
      (birthMonth === 12 && birthDay >= 22) ||
      (birthMonth === 1 && birthDay <= 19)
    ) {
      newSign = "Capricorn";
    } else if (
      (birthMonth === 1 && birthDay >= 20) ||
      (birthMonth === 2 && birthDay <= 18)
    ) {
      newSign = "Aquarius";
    } else if (
      (birthMonth === 2 && birthDay >= 19) ||
      (birthMonth === 3 && birthDay <= 20)
    ) {
      newSign = "Pisces";
    }

    return newSign;
  };

  return (
    <div className="astrology-page">
      <AstrologyForm
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        handleSubmit={handleFormSubmit}
      />
      {zodiacSign && <ZodiacReport zodiacSign={zodiacSign} />}
      <div className="learn-about-astrology">
        <h2>What is Astrology?</h2>
        <p>
          Astrology is the study of celestial bodies and their influence on human affairs and natural phenomena. 
          By analyzing the position of the stars, planets, and other celestial objects at the time of a person's birth, astrology provides insight into their personality, behavior, and life events.
        </p>
      </div>
    </div>
  );
};

export default AstrologyPage;
