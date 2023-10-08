import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchApi = () => {
  const [data, setData] = useState();

  const [name, setName] = useState();

  const [move, setMove] = useState();

  const InputData = (event) => {
    // console.log(event.target.value);
    setData(event.target.value);
  };

  const api = async () => {
    try {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${data}`
      );
      //   console.log(apiData);
      setName(apiData.data.name);
      setMove(apiData.data.moves.length);
    } catch (err) {
      console.log(`The error is ${err}`);
    }
  };

  useEffect(() => {
    api();
  });

  return (
    <>
      <h1>The pokeapi name is: {name}</h1>
      <h2>
        {name} moves {move} times
      </h2>
      <select onChange={InputData}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="6">6</option>
        <option value="4">4</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  );
};
export default FetchApi;
