import { useCallback, useState } from "react";
import Search from "./Search";
import { shuffle } from "../contexts/Shuffle";

const allUsers = ["john", "jane", "alice", "bob", "charlie", "david", "eve"];

export const Users = () => {
  console.log("Parent component rendered");
  const [users, setUsers] = useState(allUsers);

  const handleSeach = useCallback(
    (text) => {
      console.log(users[0]);
      const filterdUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filterdUsers);
    },
    [users]
  );

  return (
    <div>
      <div>
        <h1>Search Users</h1>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

        <Search onChange={handleSeach} />
      </div>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
