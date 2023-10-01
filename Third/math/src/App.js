import "./App.css";
import { add, sub, mul, div } from "./Calc";
import Card from "./Card";
import img1 from "./images/evening.jpg";
import img2 from "./images/sunrise.jpg";
import img3 from "./images/sunset.jpg";
import arr from "./Card1";
import W3 from "./W3";
import Youtube from "./Youtube";

const something = "W3";
// const Loop = () => {
//   if (something === "W3") {
//     return <W3 />;
//   } else {
//     return <Youtube />;
//   }
// };

function App() {
  return (
    <>
      <h2>Sum of the two number is {add(40, 60)}</h2>
      <h2>Subtraction of two number is {sub(50, 30)}</h2>
      <h2>Multiplication of two number is {mul(50, 30)}</h2>
      <h2>Division of two number is {div(50, 30)}</h2>
      <Card
        image={img1}
        link="https://www.w3schools.com/react/react_props.asp"
        text="W3School"
      />
      <Card
        image={img2}
        link="https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"
        text="Youtube"
      />
      <Card image={img3} link="https://www.indiabix.com/" text="Reasoning" />

      <h2>Second day by using array of an object</h2>

      <Card image={arr[0].image} link={arr[0].link} text={arr[0].text} />
      <Card image={arr[1].image} link={arr[1].link} text={arr[1].text} />
      <Card image={arr[2].image} link={arr[2].link} text={arr[2].text} />
      <h2>Day3 conditional work</h2>
      {/* <Loop /> */}

      {something === "W3" ? <W3 /> : <Youtube />}
    </>
  );
}

export default App;
