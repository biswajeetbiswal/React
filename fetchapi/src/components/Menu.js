import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Menu = () => {
  return (
    <>
      {/* <a href="/fetchapi">kdc</a>
      <a href="/about">kdslk</a> <br /> */}
      <div className="menu">
        <Link to={"/fetchapi"}>FetchApi</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </>
  );
};
export default Menu;
