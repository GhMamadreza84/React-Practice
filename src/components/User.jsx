import { useEffect, useState } from "react";
const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      };
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
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
