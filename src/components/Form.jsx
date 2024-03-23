import { useState } from "react";

export default function Form() {
  const [formName, SetName] = useState("");

  //   function hadleChange(event) {
  // Event is an object that has a target property that has a value property and more data
  //     console.log(event.target.value);
  //     SetName(event.target.value);
  //   }

  // We can use any of following way to archieve the same result
  //   <div>
  //     <form>
  //       <input
  //   onChange={function demonstrateChange(event) {
  //     return hadleChange(event);
  //   }}

  //   onChange={(event) => hadleChange(event)}
  //    />

  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>

  return (
    <div>
      <form>
        <input
          onChange={(event) => SetName(event.target.value)}
          type="text"
          value={formName}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
