import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({ name: "Alex", age: "" });
  console.log(state);
  // I just wanted to update the name
  // Spread operator I can use to to update
  // How to update the whole state without removie the name:"Alex" in line 6
  useEffect(() => {
    setState((prevState) => ({ ...prevState, age: 30 }));
  }, []);
  return <div className="App">useReducer</div>;
}

export default App;

// Premitive value
// Like => Number and string
// We can do setState() to update

// But if it's non primitive like object and array then we have to follow line 11
