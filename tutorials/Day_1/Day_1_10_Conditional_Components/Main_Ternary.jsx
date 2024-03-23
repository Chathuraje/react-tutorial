import Profile from "./Profile";
import Welcome from "./Welcome";

export default function ConditionalComponents() {
  const display = true;
  // We can use ternary operator to achieve the same results.
  return display ? <Profile /> : <Welcome />;
}
