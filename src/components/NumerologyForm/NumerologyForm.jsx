import React from 'react';
import './NumerologyForm.scss';

const NumerologyForm = ({ fullName, setFullName, day, setDay, month, setMonth, year, setYear, handleSubmit }) => {
  return (
    <div className="numerology-form">
      <h1 className="title">Numerology Report</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
          min="1900"
          max="2099"
          required
        />
        <button type="button" onClick={handleSubmit}>
          SHOW MY NUMEROLOGY REPORT
        </button>
        {(!fullName || !day || !month || !year) && (
          <p className="warning-message">Please provide full name and birthdate to see the Numerology Analysis</p>
        )}
      </form>
    </div>
  );
};

export default NumerologyForm;
