import { useEffect , useState } from "react";
const User = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <p>User</p>
    </div>
  );
};

export default User;
