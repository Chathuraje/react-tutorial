import axios from "axios";
import { useState } from "react";

export default function FetchDataWithInputs() {
  const [name, setName] = useState(null);
  const [data, setData] = useState(0);

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      //   console.log(response.data);
      setData(response.data);
    });
  };

  return (
    <div>
      <h1>How Old am I?</h1>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Data...</button>

      <h3>Name: {data?.name}</h3>
      <h3>Predicted Age: {data?.age}</h3>
      <h3>Count: {data?.count}</h3>
    </div>
  );
}
