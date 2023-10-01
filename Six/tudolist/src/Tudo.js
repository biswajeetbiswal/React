import React, { useState } from "react";
import TudoFrame from "./TudoFrame";

const Tudo = () => {
  const [text, Ctext] = useState("");
  const [item, aitem] = useState([]);

  const InputData = (event) => {
    // console.log(event.target.value);
    Ctext(event.target.value);
  };

  const ListOfData = () => {
    aitem((oldData) => {
      return [...oldData, text];
    });
    Ctext("");
  };

  const deleteItem = (id) => {
    // console.log("deleted");
    aitem((oldData) => {
      return oldData.filter((arrItem, index) => {
        // console.log(arrItem);
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="header">
        <div className="content">
          <h1>TudoList</h1>
          <input
            type="text"
            placeholder="Add an item"
            onChange={InputData}
            value={text}
          />
          <button onClick={ListOfData}>+</button>
          <ol>
            {item.map((data, index) => {
              return (
                <TudoFrame
                  key={index}
                  id={index}
                  info={data}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Tudo;
