import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.image} alt="logo" />
        </div>
        <div className="link">
          <button>
            <a href={props.link}>{props.text}</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
