import React from "react";
import ReactDom from "react-dom";
// import x, { y, myapp } from "./App";
import * as title from "./App";
ReactDom.render(
  <>
    <h2>{title.default}</h2>
    <h2>{title.y}</h2>
    <h2>{title.myapp()}</h2>
  </>,
  document.getElementById("root")
);
