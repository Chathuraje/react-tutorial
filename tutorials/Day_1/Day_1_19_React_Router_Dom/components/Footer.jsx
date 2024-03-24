import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav>
        <center>
          <h2>This is the Footer</h2>
          <Link to="/">Home</Link> ||
          <Link to="/menu">Menu</Link>||
          <Link to="/about">About</Link>
        </center>
      </nav>
    </div>
  );
}
