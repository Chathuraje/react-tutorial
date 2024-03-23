import Profile from "./Profile";
import Welcome from "./Welcome";

// It's not a good practise to have nultiple return statements in a function.
// Instead, we can use a variable to store the component we want to display and then return that variable. This is shown in the next snippet.

// export default function ConditionalComponents() {
//   const display = true;

//   if (display) {
//     return <Profile />;
//   } else {
//     return <Welcome />;
//   }
// }

// We can use Element Variable for the same purpose.
export default function ConditionalComponents() {
  const display = true;
  let element;

  if (display) {
    element = <Profile />;
  } else {
    element = <Welcome />;
  }

  return element;
}
