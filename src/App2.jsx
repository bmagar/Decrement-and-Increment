import { useState } from "react";

function Counter({ initialCount = 0, step = 10 }) {
  //Accepting two props then needs in object
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function App2() {
  return <Counter />;
}

export default App2;
