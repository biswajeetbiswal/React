import React, { useState } from "react";

const Color = () => {
  const [bg, Cbg] = useState("red");
  const [text, Ctext] = useState("Click Me");
  const BackgroundC = () => {
    Cbg("green");
    Ctext("Thank You!");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={BackgroundC}>{text}</button>
      </div>
    </>
  );
};
export default Color;
