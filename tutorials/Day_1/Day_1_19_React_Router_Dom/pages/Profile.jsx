import { useParams } from "react-router-dom";

export default function Profile() {
  let { username } = useParams();
  return (
    <div>
      <h1>Welcome to the Profile Page!: {username}</h1>
    </div>
  );
}
