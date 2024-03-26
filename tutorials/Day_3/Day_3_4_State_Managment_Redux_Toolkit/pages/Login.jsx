import { useSelector } from "react-redux";
import { Logged } from "../components/Logged";
import { Visitor } from "../components/Visitor";

export const Login = () => {
  const username = useSelector((state) => state.user.value.username);

  return <div>{username ? <Logged /> : <Visitor />}</div>;
};
