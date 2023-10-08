import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="mb-3">
      <h1>Enter Text</h1>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        value={text}
        onChange={handleOnChange}
        rows="3"
      ></textarea>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={handleUpClick}
      >
        UpperCase
      </button>
    </div>
  );
}
