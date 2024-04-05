import { useEffect, useState } from "react";
const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchUsers();
    return () => {
      controller.abort();
      console.log("cleanup");
    };
  }, [id]);
  // const searchHandler = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   const json = await res.json();
  //   console.log(json);
  // };
  return (
    <div>
      <input
        type="number"
        value={id}
        placeholder="enter id"
        onChange={(e) => setId(e.target.value)}
      />
      {/* <button onClick={searchHandler}>search</button> */}
      <p>User</p>
      {!users.length && !error && <h3>Loading</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {error && <h3>Something Wrong</h3>}
    </div>
  );
};

export default User;
