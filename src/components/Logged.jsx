import { useDispatch, useSelector } from "react-redux";
import { logout } from "../contexts/store";

export const Logged = () => {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Logged in as: {username}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
