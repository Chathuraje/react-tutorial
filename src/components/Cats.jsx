import { useGetCat } from "../contexts/useGetCat";

export default function Cats() {
  const { catData, refetchData, isLoading } = useGetCat();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Cats Facts {catData?.data[0]}</h1>
      <button onClick={refetchData}>Refetch</button>
    </div>
  );
}
