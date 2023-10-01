import React, { useState } from "react";

const Input = () => {
  const [text, Ctext] = useState("");

  const InputChange = (event) => {
    // console.log(event);
    Ctext(event.target.value);
  };
  const [pass, Cpass] = useState("");
  const [npass, ncpass] = useState("");
  const [newText, CNewText] = useState("");

  const ChangeData = (event) => {
    event.preventDefault();
    CNewText(text);
    ncpass(pass);
  };

  const InputPass = (e) => {
    Cpass(e.target.value);
  };

  return (
    <>
      <form onSubmit={ChangeData}>
        <h1>
          Hello,{newText} {npass}
        </h1>
        <input
          type="text"
          placeholder="Enter something"
          onChange={InputChange}
        />
        <br />
        <input type="text" placeholder="Enter something" onChange={InputPass} />
        <br />
        <button type="submit">Click Me</button>
      </form>
    </>
  );
};
export default Input;
