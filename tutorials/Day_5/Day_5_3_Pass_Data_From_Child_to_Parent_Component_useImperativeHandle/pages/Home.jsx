import { useRef } from "react";
import Counter from "../components/Counter";

export const Home = () => {
  const CounterRef = useRef(null);

  return (
    <div>
      <h1>useImperativeHandle Hook</h1>
      <Counter ref={CounterRef} />

      <button onClick={() => CounterRef.current?.reset()}>
        Reset From Parent
      </button>
    </div>
  );
};
