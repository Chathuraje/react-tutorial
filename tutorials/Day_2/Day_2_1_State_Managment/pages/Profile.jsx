import { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { AppContext } from "../contexts/AppContext";

export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <center>
        <h1>Welcome to the Profile Page!: {username}</h1>
        <ChangeProfile />
      </center>
    </div>
  );
}
