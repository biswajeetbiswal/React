import React, { useEffect, useState } from "react";
const Hook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={Increment}>Increamentet By '1' {count}</button>
    </>
  );
};
export default Hook;
