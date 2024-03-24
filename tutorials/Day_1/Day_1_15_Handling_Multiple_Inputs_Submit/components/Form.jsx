import { useState } from "react";

export default function Form() {
  const [name, SetName] = useState({ firstName: "", lastName: "" });

  function handelSubmit(event) {
    event.preventDefault();

    console.log(name);
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          type="text"
          onChange={(event) =>
            SetName({ ...name, firstName: event.target.value })
          }
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(event) =>
            SetName({ ...name, lastName: event.target.value })
          }
          value={name.lastName}
        />
        <button onClick={(event) => handelSubmit(event)}>Submit</button>
      </form>
    </div>
  );
}
