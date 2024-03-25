import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);
  return <div>Welcome Home: {username}</div>;
};
