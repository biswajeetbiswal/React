import React from "react";

const TudoFrame = (props) => {
  return (
    <>
      <div className="frame">
        <button
          className="deleteButton"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          *
        </button>
        <li>{props.info}</li>
      </div>
    </>
  );
};
export default TudoFrame;
