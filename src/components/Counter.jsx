import { forwardRef, useImperativeHandle, useState } from "react";

const Counter = (props, ref) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={() => increment()}>Incremdent</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};
export default forwardRef(Counter);
