import { useState } from "react";
import Counter from "./Counter";

export default function UseEffects() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setStatus(!status)}>Mount/Unmount</button>

      {status ? <Counter /> : ""}
    </div>
  );
}
