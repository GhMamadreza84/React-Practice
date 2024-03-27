import { useState } from "react";

const ChildA = ({ number, setNumber }) => {
  return (
    <div>
      <h3>Child A</h3>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </div>
  );
};

export default ChildA;
