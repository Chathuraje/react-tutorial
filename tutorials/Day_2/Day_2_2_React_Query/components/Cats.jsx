import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Cats() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["catsFacts"],
    queryFn: async () => {
      const response = await axios.get("https://meowfacts.herokuapp.com/");
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error fetching data</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Cats Facts {catData?.data[0]}</h1>
      <button onClick={refetch}>ReFetch Data</button>
    </div>
  );
}
