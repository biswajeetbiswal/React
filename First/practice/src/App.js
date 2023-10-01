import "./App.css";
import img1 from "./images/sunrise.jpg";
import img2 from "./images/sunset.jpg";
import img3 from "./images/evening.jpg";
let hours, minute, second;

function sample() {
  let now = new Date();
  hours = now.getHours().toString().padStart(2, "0");
  minute = now.getMinutes().toString().padStart(2, "0");
  second = now.getSeconds().toString().padStart(2, "0");
}
sample();
const header = {
  backgroundSize: "cover",
};
let text = "";
if (hours >= 4 && hours <= 11) {
  text = "Good Morning";
  header.backgroundImage = `url(${img1})`;
} else if (hours >= 11 && hours <= 16) {
  text = "Good Afternoon";
  header.backgroundImage = `url(${img2})`;
} else {
  text = "Good Evening";
  header.backgroundImage = `url(${img3})`;
}
function App() {
  return (
    <>
      <div className="header" style={header}>
        <div className="body">
          <h1>
            {hours}:{minute}:{second}
          </h1>
          <h2>Hello Sir,{text}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
