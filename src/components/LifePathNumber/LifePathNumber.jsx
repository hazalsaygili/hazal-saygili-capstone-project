import React, { useEffect, useState } from "react";
import lifePaths from "../../data/LifePaths.json";
import "./LifePathNumber.scss";

const LifePathNumber = ({ birthDay, birthMonth, birthYear }) => {
  const [lifePathNumber, setLifePathNumber] = useState(null);
  const [lifePathObj, setLifePathObj] = useState(null);

  useEffect(() => {
    const lifePathCalculator = (day, month, year) => {
      let birthDay = Number(day);
      let birthMonth = Number(month);
      let birthYear = Number(year);
      let first_day_digit = 0;
      let second_day_digit = 0;
      let first_month_digit = 0;
      let second_month_digit = 0;
      let first_year_digit = Math.trunc(birthYear / 1000);
      let second_year_digit = Math.trunc(birthYear / 100) - first_year_digit * 10;
      let third_year_digit =
        Math.trunc(birthYear / 10) -
        second_year_digit * 10 -
        first_year_digit * 100;
  
      let fourth_year_digit =
        birthYear -
        third_year_digit * 10 -
        second_year_digit * 100 -
        first_year_digit * 1000;
      let lifePathNumber = 0;
  
      if (birthDay / 10 >= 1) {
        first_day_digit = Math.trunc(birthDay / 10);
        second_day_digit = birthDay % 10;
      } else {
        first_day_digit = birthDay;
      }
  
      if (birthMonth / 10 >= 1) {
        first_month_digit = Math.trunc(birthMonth / 10);
        second_month_digit = birthMonth % 10;
      } else {
        first_month_digit = birthMonth;
      }
  
      console.log(first_day_digit);
      console.log(second_day_digit);
      console.log(first_month_digit);
      console.log(second_month_digit);
  
      let birthdaySum =
        first_day_digit +
        second_day_digit +
        first_month_digit +
        second_month_digit +
        first_year_digit +
        second_year_digit +
        third_year_digit +
        fourth_year_digit;
  
      console.log(birthdaySum);
  
      let first_birthdaySum_digit = 0;
      let second_birthdaySum_digit = 0;
  
      if (birthdaySum === 11) {
        return birthdaySum;
      }
  
      if (birthdaySum === 22 || birthdaySum === 40) {
        return 22;
      }
  
      if (birthdaySum === 33) {
        return birthdaySum;
      }
  
      if (birthdaySum / 10 >= 1) {
        first_birthdaySum_digit = Math.trunc(birthdaySum / 10);
        second_birthdaySum_digit = birthdaySum % 10;
        lifePathNumber = first_birthdaySum_digit + second_birthdaySum_digit;
      } else {
        lifePathNumber = birthdaySum;
      }
  
      if (lifePathNumber === 11) {
        return lifePathNumber;
      }
  
      if (Math.trunc(lifePathNumber / 10) >= 1) {
        lifePathNumber = Math.trunc(lifePathNumber / 10) + (lifePathNumber % 10);
      }
  
      console.log(lifePathNumber);
  
      return lifePathNumber;
    };
  
    const life_path_number = lifePathCalculator(birthDay, birthMonth, birthYear);
    console.log(lifePathNumber);
    console.log(life_path_number);
    const newLifePathObj = lifePaths.find((obj) => obj.id == life_path_number);
    setLifePathNumber(life_path_number);
    setLifePathObj(newLifePathObj);
  }, [birthDay, birthMonth, birthYear]);


  if (!lifePathObj) {
  return <p>Loading...</p>;
  }
  
  else

  return (
    <div className="numerology-section">
      <h2>Life Path Number: {lifePathNumber}</h2>
      <h3>{lifePathObj.title}</h3>
      <p>{lifePathObj.description}</p>
    </div>
  );
};

export default LifePathNumber;
