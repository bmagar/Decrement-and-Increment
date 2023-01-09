import { useReducer, useState } from "react";

function Counter({ initialCount = { count: 0, total: 100 }, step = 10 }) {
  const [state, dispatch] = useReducer(countReducer, initialCount);

  function countReducer(state, action) {
    if (action.type === "increment") {
      return { ...state, count: state.count + action.step };
    }
    if (action.type === "decrement") {
      return { ...state, count: state.count - action.step };
    }
    return 0;
  }

  const increment = () => dispatch({ type: "increment", step });
  const decrement = () => dispatch({ type: "decrement", step });
  return (
    <>
      <div>
        <button onClick={increment}>Increment count:</button>
      </div>

      <div>
        <button onClick={decrement}>Increment count</button>
      </div>
      <h1>{state.count}</h1>
    </>
  );
}

function App4() {
  return <Counter />;
}

export default App4;

// Important
// -> the newState is the line 15
// What evern I write in setCount on line 15 it will go on newState in line 8
// the setCount line 17 is giving the new value to the reducer function on lne 8 to newState

//Whatever the value return from the useReduder the value will be the count from line6
