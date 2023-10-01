import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="Card">
        <h5>{props.info.title}</h5>
        <p>{props.info.text}</p>
        <button
          className="btn add_btn"
          onClick={() => {
            props.delete(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Card;
