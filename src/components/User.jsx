import { useEffect } from "react";
const User = () => {
    useEffect(()=>{
        console.log("mounted")
    },[])
  return (
    <div>
      <p>User</p>

    </div>
  );
};

export default User;
