import { useDeferredValue, useState } from "react";
import { SlowList } from "../components/SlowList";

export const Home = () => {
  const [query, setQuery] = useState("");
  const defeeredQuery = useDeferredValue(query);

  return (
    <div>
      <h1>useDeferredValue</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />

      <SlowList text={defeeredQuery} />
    </div>
  );
};
