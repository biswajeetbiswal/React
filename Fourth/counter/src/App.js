import "./App.css";
import Counter from "./Counter";
import Color from "./ColorChange";
import SecondForm from "./SecondForm";
import Input from "./Input";
import DigitalClock from "./DigitalClock";
import Hook from "./Hook";

const App = () => {
  // console.log(DigitalClock());
  return (
    <>
      <Counter />
      <br />
      <br />
      <Color />
      <br />
      <br />
      <Input />
      <br />
      <br />
      <SecondForm />
      <br />
      {/* <DigitalClock />
      {DigitalClock()} */}
      <DigitalClock />
      <Hook />
    </>
  );
};

export default App;
