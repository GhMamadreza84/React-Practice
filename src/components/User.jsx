import { useEffect } from "react";
const User = () => {
    useEffect(()=>{
        setTimeout(()=>console.log("mounted"),3000)
    },[])
  return (
    <div>
      <p>User</p>

    </div>
  );
};

export default User;
