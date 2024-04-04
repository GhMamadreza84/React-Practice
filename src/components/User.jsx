import { useEffect, useState } from "react";
const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = fetch("https://jsonplaceholder.typicode.com/users");
      const data = res.json();
      setUsers(json);
    };
    fetchUsers();
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
