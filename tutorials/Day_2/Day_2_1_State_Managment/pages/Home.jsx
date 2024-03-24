import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Home() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <center>
        <h1>Welcome to the Home Page!: {username}</h1>
      </center>
    </div>
  );
}
