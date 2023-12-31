import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="" className="card-img-top" alt="..."> */}
        <img src={props.image} alt="jskva" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
