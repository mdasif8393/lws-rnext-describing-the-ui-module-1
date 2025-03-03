import "./App.css";
import Cup from "./components/Cup";

function App() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

export default App;
