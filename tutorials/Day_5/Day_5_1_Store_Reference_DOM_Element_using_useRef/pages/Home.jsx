import { useEffect, useRef } from "react";

export const Home = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>useRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="Type Something....." />
    </div>
  );
};
