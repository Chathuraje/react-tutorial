import { memo } from "react";

function Search({ onChange }) {
  console.log("Child component rendered");

  return (
    <input
      type="text"
      placeholder="Search users...."
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default memo(Search);
