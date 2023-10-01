import React, { useState, useEffect } from "react";
import Card from "./Card";

const Database = () => {
  const [item, setItem] = useState([]);

  const getdata = async () => {
    const data = await fetch(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    const info = await data.json();
    // console.log(Object.entries(info.OR.districts));
    setItem(Object.entries(info.OR.districts));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="grid">
        {item.map((current, index) => {
          return (
            <Card
              key={index}
              districts={current[0]}
              confirmed={current[1].total.confirmed}
              recovered={current[1].total.recovered}
              deceased={current[1].total.deceased}
              tested={current[1].total.tested}
              vaccinated={current[1].total.vaccinated1}
            />
          );
        })}
      </div>
    </>
  );
};
export default Database;
