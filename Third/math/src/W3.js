import React from "react";
import arr from "./Card1";
import Card from "./Card";
const W3 = () => {
  return (
    <>
      <Card image={arr[0].image} link={arr[0].link} text={arr[0].text} />
    </>
  );
};

export default W3;
