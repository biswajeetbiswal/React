import "./App.css";
import React, { useState } from "react";
import img1 from "./Images/sunrise.jpg";
import img2 from "./Images/evening.jpg";
import img3 from "./Images/sunset.jpg";

function App() {
  let Ctime = new Date().toLocaleTimeString();
  const [state, CsTime] = useState(Ctime);
  const [Cimg, setImage] = useState();
  const [greet, setGreet] = useState("");
  let time = state;
  const arr = time.replace(" ", ":").split(":");

  const UpdateTime = () => {
    Ctime = new Date().toLocaleTimeString();
    CsTime(Ctime);
    if (arr[0] >= 5 && arr[0] < 12 && arr[3] === "AM") {
      setGreet("Good Morning");
      setImage(img1);
    } else if (
      (arr[0] === 12 && arr[3] === "PM") ||
      (arr[0] < 6 && arr[3] === "PM")
    ) {
      setGreet("Good Afternoon");
      setImage(img3);
    } else if (arr[0] < 12 && arr[3] === "PM") {
      setGreet("Good Evening");
      setImage(img2);
    } else {
      setGreet("Good Nignt");
      setImage(img2);
    }
  };
  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="header" style={{ backgroundImage: `url(${Cimg})` }}>
        <div className="content">
          <h1 style={{ color: "red" }}>{state}</h1>
          <h2> Hello sir, {greet}!</h2>
        </div>
      </div>
    </>
  );
}

export default App;
