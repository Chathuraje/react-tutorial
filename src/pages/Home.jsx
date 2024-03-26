import { useState } from "react";
import { useLocalStorage } from "../contexts/useLocalStorage";

export const Home = () => {
  const [value, setValue] = useState("");
  const { setItem, getItem, deleteItem } = useLocalStorage("value");

  return (
    <div>
      <h1>Local Storage</h1>

      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => setItem(value)}>Set</button>
      <button onClick={() => alert(getItem())}>Get</button>
      <button onClick={() => deleteItem()}>Remove</button>
    </div>
  );
};
