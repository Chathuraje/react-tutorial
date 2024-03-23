import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the About Page!</h1>

      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Change to Menu Page
      </button>
    </div>
  );
}
