import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../contexts/store";

export const Visitor = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        type="text"
        id="login"
        placeholder="Login"
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
    </div>
  );
};
