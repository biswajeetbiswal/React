import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};
export default DigitalClock;
