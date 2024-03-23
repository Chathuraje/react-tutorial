const name = "Chathura";

function displayMessage() {
  return "This is a function";
}

function Hello() {
  return (
    <div>
      <h1>
        {name}: This is a Component! {10 + 10}
      </h1>
      <h2>Function: {displayMessage()}</h2>
    </div>
  );
}

export default Hello;
