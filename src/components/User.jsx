import { useEffect, useState } from "react";
const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div>
      <p>User</p>
      {!users.length && <h3>Loading</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
