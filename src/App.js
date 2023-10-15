import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const currentDate = new Date();
    const selectedDate = new Date(birthDate);

    if (!isNaN(currentDate) && !isNaN(selectedDate)) {
      let yearDiff = currentDate.getFullYear() - selectedDate.getFullYear();
      let monthDiff = currentDate.getMonth() - selectedDate.getMonth();
      let dayDiff = currentDate.getDate() - selectedDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearDiff--;
        monthDiff += 12;
        if (dayDiff < 0) {
          const lastMonthDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
          ).getDate();
          dayDiff = lastMonthDate + dayDiff;
          monthDiff--;
        }
      }

      let diff = "";

      if (yearDiff > 0) {
        diff += `${yearDiff} year${yearDiff > 1 ? "s" : ""}`;
      }
      if (monthDiff > 0) {
        diff += `${diff ? " " : ""}${monthDiff} month${
          monthDiff > 1 ? "s" : ""
        }`;
      }
      if (dayDiff > 0) {
        diff += `${diff ? " " : ""}${dayDiff} day${dayDiff > 1 ? "s" : ""}`;
      }

      setAge(diff);
    } else {
      setAge("");
    }
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate">Enter your birth date:</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate</button>
      {age && <p>{`Your age is ${age}`}</p>}
    </div>
  );
};

export default AgeCalculator;
