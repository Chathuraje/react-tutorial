import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <center>
          <Link to="/">Home</Link> ||
          <Link to="/login">Login</Link>
        </center>
      </nav>
    </div>
  );
};
