export default function Message() {
  function handleClick() {
    console.log("You clicked the button");
  }
  // when we use handleClick as a callback function, we don't use parentheses. if we do use parentheses, the function will be called immediately
  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
