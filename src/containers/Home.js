import React, { useEffect, useState } from "react";
import axios from "axios";
import Monster from "../components/Monster";
import Holiday from "../components/Holiday";
import HolidaySelector from "../components/HolidaySelector";

const MONSTER_QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://app.pixelencounter.com/api/basic/monsters/random`;

const HOLIDAY_QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v3/publicholidays/2021/US`;

// function changeWord(e) {
//   e.preventDefault();
//   const word = e.currentTarget.word.value;
//   console.log({ word });
// }

function Home() {
  const [monster, setMonster] = useState();
  const [allHolidays, setAllHolidays] = useState();
  const [currentHoliday, setCurrentHoliday] = useState();

  function changeHoliday(e) {
    e.preventDefault();
    const holidaySelected = e.currentTarget.value;
    const holiday = allHolidays.find((h) => h.name === holidaySelected);
    setCurrentHoliday(holiday);
  }

  useEffect(() => {
    if (currentHoliday) {
      axios
        .get(MONSTER_QUERY_STRING)
        .then(function (response) {
          const monsterSVG = response.data;
          setMonster(monsterSVG);
        })
        .catch(function (error) {
          // handle error
          console.warn(error);
        });
    }
  }, [currentHoliday]);

  useEffect(() => {
    if (!allHolidays) {
      axios
        .get(HOLIDAY_QUERY_STRING)
        .then(function (response) {
          setAllHolidays(response.data);
          setCurrentHoliday(response.data[0]);
        })
        .catch(function (error) {
          // handle error
          console.warn(error);
        });
    }
  }, [allHolidays]);

  return (
    <>
      <header>
        <h1>Holiday Monster</h1>
        <HolidaySelector
          allHolidays={allHolidays || []}
          changeHoliday={changeHoliday}
        />
      </header>

      {/* <form onSubmit={(e) => changeWord(e)}>
        <input type="text" placeholder="Type Word" name="word" />
        <button type="submit">Click me</button>
      </form> */}

      <main>
        <Monster monsterSvg={monster} />
        <Holiday holidayData={currentHoliday || {}} />
      </main>
      <footer>
        <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">
          Re-activate CORS Anywhere...
        </a>
      </footer>
    </>
  );
}

export default Home;
