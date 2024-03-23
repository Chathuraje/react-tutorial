import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // useState(0) -> Set count = 0 when the page loads
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>Count Value is: {count}</div>
      <button onClick={increment}>Increments</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
