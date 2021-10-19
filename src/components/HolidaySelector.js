import React from "react";

function HolidaySelector({ allHolidays, changeHoliday }) {
  return (
    <select onChange={(e) => changeHoliday(e)}>
      {allHolidays.map((holiday, i) => (
        <option key={i} value={holiday.name}>
          {holiday.name}
        </option>
      ))}
    </select>
  );
}

export default HolidaySelector;
