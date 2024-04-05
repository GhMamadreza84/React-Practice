import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);
  return <div></div>;
};

export default Count;
