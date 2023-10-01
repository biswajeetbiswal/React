import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [item, setItem] = useState([]);
  const ClickOn = (e) => {
    console.log(e);
    setItem((prevalue) => {
      return [...prevalue, e];
    });
  };
  const DeleteItem = (data) => {
    setItem((prevalue) => {
      return prevalue.filter((arritem, point) => {
        return point !== data;
      });
    });
  };
  return (
    <>
      <Header />
      <Input click={ClickOn} />

      <div className="Grid">
        {item.map((data, index) => {
          return (
            <Card key={index} id={index} info={data} delete={DeleteItem} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
