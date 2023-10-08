import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Navbar" />
      <div className="container">
        <TextForm />
      </div>
      <br />
      <br />
      <Search />
    </>
  );
}

export default App;
