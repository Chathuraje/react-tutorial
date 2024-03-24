import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <center>
          <Link to="/">Home</Link> ||
          <Link to="/profile">Profile</Link>
        </center>
      </nav>
    </div>
  );
}
