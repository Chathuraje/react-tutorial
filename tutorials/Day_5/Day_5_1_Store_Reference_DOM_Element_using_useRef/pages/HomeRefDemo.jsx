import { useRef } from "react";

export const Home = () => {
  const countRef = useRef(0);

  const handeleIncrement = () => {
    countRef.current++;

    console.log("Ref: " + countRef.current);
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      Count: {countRef.current}
      <button onClick={handeleIncrement}>Increment</button>
    </div>
  );
};
