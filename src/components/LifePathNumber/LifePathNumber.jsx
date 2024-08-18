import React, { useEffect, useState } from 'react';
import lifePaths from '../../data/LifePaths.json';
import './LifePathNumber.scss';

const LifePathNumber = ({ birthDay, birthMonth, birthYear }) => {
  const [lifePathNumber, setLifePathNumber] = useState(null);
  const [lifePathObj, setLifePathObj] = useState(null);

  useEffect(() => {
    const lifePathCalculator = (birthDay, birthMonth, birthYear) => {
      const reduceToSingleDigit = (num) => {
        while (num > 9 && ![11, 22, 33].includes(num)) {
          num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return num;
      };

      const reducedDay = reduceToSingleDigit(birthDay);
      const reducedMonth = reduceToSingleDigit(birthMonth);
      const reducedYear = reduceToSingleDigit(birthYear);

      let birthdaySum = reducedDay + reducedMonth + reducedYear;
      return reduceToSingleDigit(birthdaySum);
    };

    let life_path_number = lifePathCalculator(birthDay, birthMonth, birthYear);
    console.log('Calculated Life Path Number:', life_path_number); // Debugging line
    let newLifePathObj = lifePaths.find((obj) => obj.id == life_path_number);
    console.log('Found Life Path Object:', newLifePathObj); // Debugging line
    setLifePathNumber(life_path_number);
    setLifePathObj(newLifePathObj);
  }, [birthDay, birthMonth, birthYear]);

  if (!lifePathObj) return <p>Loading...</p>;

  return (
    <div className="numerology-section">
      <h2>Life Path Number: {lifePathNumber}</h2>
      <h3>{lifePathObj.title}</h3>
      <p>{lifePathObj.description}</p>
    </div>
  );
};

export default LifePathNumber;
