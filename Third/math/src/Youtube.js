import React from "react";
import arr from "./Card1";
import Card from "./Card";

const Youtube = () => {
  return (
    <>
      <Card image={arr[2].image} link={arr[2].link} text={arr[2].text} />
    </>
  );
};
export default Youtube;
