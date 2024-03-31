import "./App.css";
import Heading from "./components/Heading";
import Keeper from "./components/keeper";

function App() {
  return (
    <>
      <div className="max-w-screen-xl">
        <Heading />
        <Keeper />
      </div>
    </>
  );
}

export default App;
