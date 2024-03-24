import React from "react";

const ChildB = ({ number }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>
      <h3>Child B</h3>
      <p>{number}</p>
    </div>
  );
};

export default ChildB;
