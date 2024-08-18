import React, { useEffect, useState } from 'react';
import SoulUrges from '../../data/SoulUrges.json';
import './SoulUrgeNumber.scss';

const SoulUrgeNumber = ({ fullName }) => {
  const [soulUrgeNumber, setSoulUrgeNumber] = useState(null);
  const [soulUrgeObj, setSoulUrgeObj] = useState(null);

  useEffect(() => {
    const calculateSoulUrgeNumber = (fullName) => {
      const letterToNumberMap = {
        1: ['A', 'J', 'S'],
        2: ['B', 'K', 'T'],
        3: ['C', 'L', 'U'],
        4: ['D', 'M', 'V'],
        5: ['E', 'N', 'W'],
        6: ['F', 'O', 'X'],
        7: ['G', 'P', 'Y'],
        8: ['H', 'Q', 'Z'],
        9: ['I', 'R']
      };

      const vowels = ['A', 'E', 'I', 'O', 'U'];
      let sum = 0;

      for (const char of fullName.toUpperCase()) {
        if (vowels.includes(char)) {
          for (const [num, letters] of Object.entries(letterToNumberMap)) {
            if (letters.includes(char)) {
              sum += parseInt(num);
            }
          }
        }
      }

      const reduceToSingleDigit = (num) => {
        const masterNumbers = [11, 22, 33];
        while (num > 9 && !masterNumbers.includes(num)) {
          num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
      };

      return reduceToSingleDigit(sum);
    };

    const soulUrgeNumber = calculateSoulUrgeNumber(fullName);
    const soulUrgeObj = SoulUrges.find((obj) => obj.id === soulUrgeNumber);
    setSoulUrgeNumber(soulUrgeNumber);
    setSoulUrgeObj(soulUrgeObj);
  }, [fullName]);

  if (!soulUrgeObj) return <p>No Soul Urge data available</p>;

  return (
    <div className="numerology-section">
      <h2>Soul Urge Number: {soulUrgeNumber}</h2>
      <h3>{soulUrgeObj.title}</h3>
      <p>{soulUrgeObj.description}</p>
    </div>
  );
};

export default SoulUrgeNumber;
