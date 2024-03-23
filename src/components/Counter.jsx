import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Mounting the component
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // Empty dependency array ensures the effect runs only once after mounting);

  // Updating the component
  useEffect(() => {
    console.log("Component Updating");
  }, [count]); // Runs every time the count state changes

  // Dismounting the component
  useEffect(() => {
    return () => {
      console.log("Component Unmounting");
    };
  }, []); // Empty dependency array ensures the effect runs only once after mounting);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
