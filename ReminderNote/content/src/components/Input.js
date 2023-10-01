import React, { useState } from "react";

const Input = (props) => {
  const [Ctext, setCtext] = useState({
    title: "",
    text: "",
  });
  const InputData = (event) => {
    console.log(event.target.name);
    //object Destruering
    const { value, name } = event.target;
    setCtext((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    props.click(Ctext);
    setCtext({
      title: "",
      text: "",
    });
  };

  return (
    <>
      <div className="form_container">
        {/* <h1>
          {Ctext.title} {Ctext.text}
        </h1> */}
        <form>
          <input
            type="text"
            name="title"
            value={Ctext.title}
            placeholder="Enter your title"
            onChange={InputData}
          />
          <br />
          <br />
          <textarea
            name="text"
            id=""
            value={Ctext.text}
            placeholder="Enter text"
            onChange={InputData}
          ></textarea>
          <br />
          <button className="btn add_btn" onClick={OnSubmit}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default Input;
