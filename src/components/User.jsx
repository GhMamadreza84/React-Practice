import { useEffect, useState } from "react";
const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("hsttps://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
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
