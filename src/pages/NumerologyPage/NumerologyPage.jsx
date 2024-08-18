import React, { useState } from 'react';
import LifePathNumber from '../../components/LifePathNumber/LifePathNumber';
import DestinyNumber from '../../components/DestinyNumber/DestinyNumber';
import SoulUrgeNumber from '../../components/SoulUrgeNumber/SoulUrgeNumber';
import CharacterNumber from '../../components/CharacterNumber/CharacterNumber';
import './NumerologyPage.scss';

const NumerologyPage = () => {
  const [fullName, setFullName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [showReport, setShowReport] = useState(false);
  const [activeSection, setActiveSection] = useState('lifePath');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (fullName && birthDay && birthMonth && birthYear) {
      setShowReport(true);
    } else {
      alert('Please provide full name and date of birth to see Numerology Report');
    }
  };

  console.log(activeSection); 

  return (
    <div className="numerology-page">
      <section className="numerology-page__hero">
        <div className="numerology-page__form-container">
          <h1 className="numerology-page__title">Numerology Report</h1>
          <form onSubmit={handleFormSubmit} className="numerology-page__form">
            {/* Form inputs */}
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </label>
            <label>
              Birth Day:
              <input
                type="number"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
                placeholder="DD"
                min="1"
                max="31"
                required
              />
            </label>
            <label>
              Birth Month:
              <input
                type="number"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
                placeholder="MM"
                min="1"
                max="12"
                required
              />
            </label>
            <label>
              Birth Year:
              <input
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="YYYY"
                min="1900"
                max="2099"
                required
              />
            </label>
            <button type="submit" className="numerology-page__submit-button">SHOW MY ANALYSIS</button>
            {!fullName || !birthDay || !birthMonth || !birthYear ? (
              <p className="numerology-page__warning">Please provide full name and date of birth to see Numerology Report</p>
            ) : null}
          </form>
        </div>
        <div className="numerology-page__info">
          {showReport ? (
            <div className="numerology-page__report">
              <div className="numerology-page__tabs">
                <button
                  className={`numerology-page__tab ${activeSection === 'lifePath' ? 'active' : ''}`}
                  onClick={() => setActiveSection('lifePath')}
                >
                  Life Path
                </button>
                <button
                  className={`numerology-page__tab ${activeSection === 'destiny' ? 'active' : ''}`}
                  onClick={() => setActiveSection('destiny')}
                >
                  Destiny
                </button>
                <button
                  className={`numerology-page__tab ${activeSection === 'soulUrge' ? 'active' : ''}`}
                  onClick={() => setActiveSection('soulUrge')}
                >
                  Soul Urge
                </button>
                <button
                  className={`numerology-page__tab ${activeSection === 'character' ? 'active' : ''}`}
                  onClick={() => setActiveSection('character')}
                >
                  Character
                </button>
              </div>
              {/* Rendering the corresponding component based on the activeSection */}
              {activeSection === 'lifePath' && (
                <LifePathNumber fullName={fullName} birthDay={birthDay} birthMonth={birthMonth} birthYear={birthYear} />
              )}
              {activeSection === 'destiny' && (
                <DestinyNumber fullName={fullName} />
              )}
              {activeSection === 'soulUrge' && (
                <SoulUrgeNumber fullName={fullName} />
              )}
              {activeSection === 'character' && (
                <CharacterNumber fullName={fullName} />
              )}
              <button className="numerology-page__see-astrology" onClick={() => window.location.href = `/astrology?day=${birthDay}&month=${birthMonth}`}>
                SEE ASTROLOGY REPORT
              </button>
            </div>
          ) : (
            <div className="numerology-page__intro">
              <h2 className="numerology-page__info-title">What is Numerology?</h2>
              <p>
                Numerology is the study of the mystical significance of numbers and their influence on human life. It is based on the belief that numbers have inherent powers and can reveal insights into our character, destiny, and life path. By analyzing the numbers associated with a person's name and birth date, numerologists aim to uncover deeper truths and guide individuals in their personal and spiritual growth.
              </p>
              <p>
                Numerology has ancient roots in various cultures, including the Greeks, Egyptians, and Chinese. It has evolved over time to become a popular tool for self-discovery and personal development. The science behind numerology explores how numbers correlate with various aspects of life, from personality traits to life events, offering valuable guidance and perspective.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NumerologyPage;
