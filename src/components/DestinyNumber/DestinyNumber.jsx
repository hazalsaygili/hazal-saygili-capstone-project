import React, { useEffect, useState } from 'react';
import DestinyNumbers from '../../data/DestinyNumbers.json';

const DestinyNumber = ({ fullName }) => {
  const [destinyNumber, setDestinyNumber] = useState(null);
  const [destinyNumberObj, setDestinyNumberObj] = useState(null);

  useEffect(() => {
    const calculateDestinyNumber = (fullName) => {
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

      const getLetterValue = (letter) => {
        for (const [value, letters] of Object.entries(letterToNumberMap)) {
          if (letters.includes(letter.toUpperCase())) {
            return parseInt(value);
          }
        }
        return 0; 
      };

      const reduceToSingleDigit = (number) => {
        const masterNumbers = [11, 22, 33];
        while (number > 9 && !masterNumbers.includes(number)) {
          number = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return number;
      };

      let sum = 0;
      for (const char of fullName.replace(/\s+/g, '')) {
        sum += getLetterValue(char);
      }
      return reduceToSingleDigit(sum);
    };

    const destinyNumber = calculateDestinyNumber(fullName);
    const destinyNumberObj = DestinyNumbers.find((obj) => obj.id === destinyNumber);
    setDestinyNumber(destinyNumber);
    setDestinyNumberObj(destinyNumberObj);
  }, [fullName]);

  if (!destinyNumberObj) return null;

  return (
    <div className="numerology-section">
      <h2>Destination Number: {destinyNumber}</h2>
      <h3>{destinyNumberObj.title}</h3>
      <p>{destinyNumberObj.description}</p>
    </div>
  );
};

export default DestinyNumber;
