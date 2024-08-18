import React, { useEffect, useState } from 'react';
import CharacterNumbers from '../../data/CharacterNumbers.json';
import './CharacterNumber.scss';

const CharacterNumber = ({ fullName }) => {
  const [characterNumber, setCharacterNumber] = useState(null);
  const [characterNumberObj, setCharacterNumberObj] = useState(null);

  useEffect(() => {
    const calculateCharacterNumber = (fullName) => {
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
      const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
      for (const char of fullName.replace(/\s+/g, '')) {
        if (consonants.includes(char.toUpperCase())) {
          sum += getLetterValue(char);
        }
      }
      return reduceToSingleDigit(sum);
    };

    const characterNumber = calculateCharacterNumber(fullName);
    const characterNumberObj = CharacterNumbers.find((obj) => obj.id === characterNumber);
    setCharacterNumber(characterNumber);
    setCharacterNumberObj(characterNumberObj);
  }, [fullName]);

  if (!characterNumberObj) return null;

  return (
    <div className="numerology-section">
      <h2>Character Number: {characterNumber}</h2>
      <h3>{characterNumberObj.title}</h3>
      <p>{characterNumberObj.description}</p>
    </div>
  );
};

export default CharacterNumber;
