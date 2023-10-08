import React, { useState } from "react";
import SearchData from "./SearchData";

const Search = () => {
  const [data, setData] = useState("");

  const InputData = (event) => {
    // console.log(event.target.value);
    setData(event.target.value);
  };
  return (
    <>
      <h1>Search anything whatever image you want.</h1>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Enter anything you want image"
        onChange={InputData}
      />
      <div style={{ margin: "10px auto", textAlign: "center" }}>
        {data === "" ? null : <SearchData img={data} />}
      </div>
    </>
  );
};
export default Search;
