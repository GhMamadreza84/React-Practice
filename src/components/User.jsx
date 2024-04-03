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
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
};

export default User;
