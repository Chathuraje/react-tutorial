import { Text } from "../components/Text";
import { useToggle } from "./../contexts/useToggle";

export default function Home() {
  const { isVisible, toggle } = useToggle();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"} Form</button>
        {isVisible && <Text />}
      </div>
    </div>
  );
}
