import React from "react";
import "../styles/Home.css";
const Form = () => {
  const InputData = (e) => {
    e.preventDefault();
    // console.log(e.target.regdNo.value);
    alert(
      `Your name is ${e.target.fullname.value} and your roll no is ${e.target.regdNo.value} .`
    );
  };
  return (
    <>
      <div className="H_form">
        <form className="C_form" onSubmit={InputData}>
          <h3 style={{ textAlign: "center" }}>Register Form</h3>
          <br />
          <h5>Enter Your Name:</h5>
          <input
            type="text"
            placeholder="Enter Name"
            name="fullname"
            required
          />
          <br />
          <br />
          <h5>Enter your RollNo.:</h5>
          <input
            type="text"
            placeholder="Enter RollNo"
            name="regdNo"
            required
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
