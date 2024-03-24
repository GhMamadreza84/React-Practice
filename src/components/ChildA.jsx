import {useState} from "react";

const ChildA = ({number}) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>
      <h3>Child A</h3>
      <p>{number}</p>
    </div>
  );
};

export default ChildA;
