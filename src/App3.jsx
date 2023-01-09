import { useReducer, useState } from "react";

function Counter({ initialCount = 0, step = 10 }) {
  //Replace React.useState with React.useReducer
  //React.useReducer(countReducer, initialCount)
  const [count, setCount] = useReducer(countReducer, initialCount);

  function countReducer(state, newState) {
    return newState;
  }

  //you can write the countReducer function so you don't have to make any
  //changes to the next tow lines of code! Remember
  //The 1st argument is "state" - the current value of count
  //the 2nd argenment is called "newState" - the value passed ti setCount

  const increment = () => setCount("Hey my name is Binod");
  return <button onClick={increment}>{count}</button>;
}

function App3() {
  return <Counter />;
}

export default App3;

// Important
// -> the newState is the line 15
// What evern I write in setCount on line 15 it will go on newState in line 8
// the setCount line 17 is giving the new value to the reducer function on lne 8 to newState

//Whatever the value return from the useReduder the value will be the count from line6
