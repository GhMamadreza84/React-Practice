import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    setNumber((number) => number + 1);
  };
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>
      <h3>Parent</h3>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <ChildA number={number} setNumber={setNumber} />
      <ChildB number={number} button={<Button clickHandler={clickHandler} />} />
    </div>
  );
};

export default Parent;

function Button({clickHandler}) {
  return <button onClick={clickHandler}>+</button>;
}
