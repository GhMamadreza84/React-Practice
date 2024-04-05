import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count =>count+ 1);
    }, 1000);
    return ()=>{
        console.log("cleanup");
        clearInterval(interval)
    }
  }, [count]);
  return <div>
    {count}
  </div>;
};

export default Count;
