import React from 'react';
import './AstrologyForm.scss';

const AstrologyForm = ({ day, setDay, month, setMonth, year, setYear, handleSubmit }) => {
  return (
    <div className="astrology-form">
      <h1 className="title">Astrology Report</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          min="1"
          max="31"
          required
        />
        <input
          type="number"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          min="1"
          max="12"
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min="1100"
          max="7099"
          required
        />
        <button type="button" onClick={handleSubmit}>
          SHOW MY ASTROLOGY REPORT
        </button>
        {(!day || !month || !year) && (
          <p className="warning-message">Please provide your birthdate to see the Astrology Report</p>
        )}
      </form>
    </div>
  );
};

export default AstrologyForm;
