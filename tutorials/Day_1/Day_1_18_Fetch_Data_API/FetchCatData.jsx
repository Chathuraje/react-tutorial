import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [catFacts, setCatFacts] = useState("");

  function fetchCatFacts() {
    axios.get(`https://meowfacts.herokuapp.com/`).then((response) => {
      setCatFacts(response.data.data[0]);
    });
  }
  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <div>
      <h1>Random Facts about Cats</h1>
      <button onClick={fetchCatFacts}>Show the Cat Facts!</button>
      <p>{catFacts}</p>
    </div>
  );
}
