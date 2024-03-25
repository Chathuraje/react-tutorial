import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCat = () => {
  const {
    data: catData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["catsFacts"],
    queryFn: async () => {
      const response = await axios.get("https://meowfacts.herokuapp.com/");
      return response.data;
    },
  });

  const refetchData = () => {
    refetch();
    alert("Data has been refetched!");
  };

  return { catData, refetchData, isLoading };
};
