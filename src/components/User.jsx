import { useEffect } from "react";
const User = () => {
  return (
    useEffect(()=>{
        console.log("mounted");
    },[])
    <div>
      <p>User</p>

    </div>
  );
};

export default User;
