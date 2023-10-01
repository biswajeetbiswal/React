import "./App.css";
import React, { createContext } from "react";
import CompA from "./components/CompA";

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <FirstName.Provider value={"Biswajeet"}>
      <LastName.Provider value={"Biswal"}>
        <CompA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export default App;
export { FirstName, LastName };
