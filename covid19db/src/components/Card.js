import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h2 style={{ marginBottom: "10px" }}>{props.districts}</h2>
        <p>
          Confirmed: {props.confirmed} , Deceased: {props.deceased}
        </p>
        <p>
          Recovered: {props.recovered} , Tested: {props.tested}
        </p>
        <p>Vaccinated: {props.vaccinated}</p>
      </div>
    </>
  );
};
export default Card;
