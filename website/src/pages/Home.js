import React from "react";
import Navabr from "../components/Navbar";
import "../styles/Home.css";
import img from "../images/images.png";
const Home = () => {
  return (
    <>
      <Navabr />
      <div className="homeContent">
        <div className="firstContent">
          <h1>Grow your businness with</h1>
          <h1>ThapaTechnical</h1>
          <p>we are team of talanted developer making websites</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="secondContent">
          <img src={img} alt="learn" />
        </div>
      </div>
    </>
  );
};

export default Home;
