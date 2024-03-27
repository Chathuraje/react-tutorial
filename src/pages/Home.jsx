import { useLayoutEffect, useState } from "react";

const userIds = [1, 2];

export const Home = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  // This artifically slows down rendering
  let now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for bit
  }

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId);
    setUserId(otherId);
  };

  return (
    <div>
      <h1>UserID: {userId}</h1>
      <h3>Admin: {isAdmin ? "true" : "false"}</h3>

      <button onClick={handleChange}>Change User</button>
    </div>
  );
};
