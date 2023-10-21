import React, { useState } from 'react';
import "./agecalculator.css"

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>
        Enter your date of birth
        <br></br>
        <br></br>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
