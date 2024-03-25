import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  const [number, setNumber] = useState(0);
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>
      <h3>Parent</h3>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <ChildA number={number} setNumber={setNumber}/>
      <ChildB number={number} text={<button onClick={clickHandler}>+</button>} />
    </div>
  );
};

export default Parent;
