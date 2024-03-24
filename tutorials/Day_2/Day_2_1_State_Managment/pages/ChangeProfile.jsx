import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function ChangeProfile() {
  const [newUsername, setNewUsername] = useState("");
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to the Change Profile Sectrion!</h1>
      <h3>Username is: {username}</h3>

      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        type="text"
        placeholder="Enter your new username"
      />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
}
