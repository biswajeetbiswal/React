import React, { useState } from "react";

const Counter = () => {
  // const state = useState();
  const [count, setCount] = useState(0);
  const Increament = () => {
    setCount(count + 1);
  };
  const Decreament = () => {
    if (count === 0) {
      alert("Sorry, Zero limit reached");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increament}>in</button>
      <button onClick={Decreament}>Decreament</button>
    </>
  );
};
export default Counter;
