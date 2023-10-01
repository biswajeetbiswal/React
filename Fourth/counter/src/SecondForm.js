import React, { useState } from "react";

const SecondForm = () => {
  const [FullName, SetFullName] = useState({
    fname: "",
    lname: "",
  });

  const InputData = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    //Object Destructing
    const { value, name } = event.target;

    SetFullName((Prevalue) => {
      console.log(Prevalue);
      return {
        ...Prevalue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: Prevalue.lname,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: Prevalue.fname,
      //     lname: value,
      //   };
      // }
    });
  };
  const OnSubmits = (e) => {
    e.preventDefault();
    alert("Form Successfully Submitted");
  };
  return (
    <>
      <form onSubmit={OnSubmits}>
        <h1>
          Hello,{FullName.fname} {FullName.lname}
        </h1>
        <input
          type="text"
          placeholder="Enter Your FirstName"
          name="fname"
          onChange={InputData}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your FirstName"
          name="lname"
          onChange={InputData}
        />
        <br />
        <button type="submit">Click Me</button>
      </form>
    </>
  );
};
export default SecondForm;
