import React, { useEffect, useState } from "react";
import axios from "axios";
import Monster from "../components/Monster";

const MONSTER_QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://app.pixelencounter.com/api/basic/monsters/random`;

const HOLIDAY_QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v3/publicholidays/2021/US`;

function Home() {
  const [monster, setMonster] = useState();
  const [holidays, setHolidays] = useState();

  useEffect(() => {
    if (!monster) {
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
  }, [monster]);

  useEffect(() => {
    if (!holidays) {
      axios
        .get(HOLIDAY_QUERY_STRING)
        .then(function (response) {
          setHolidays(response.data);
        })
        .catch(function (error) {
          // handle error
          console.warn(error);
        });
    }
  }, []);

  console.log({ holidays });

  return (
    <main>
      <Monster monsterSvg={monster} />
      {holidays && holidays.map((holiday, i) => <p key={i}>{holiday.name}</p>)}
    </main>
  );
}

export default Home;
