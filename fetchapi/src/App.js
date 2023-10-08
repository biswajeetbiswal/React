import React from "react";
import "./App.css";
import FetchApi from "./FetchApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Menu} />
          <Route path="/fetchapi" Component={FetchApi} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
