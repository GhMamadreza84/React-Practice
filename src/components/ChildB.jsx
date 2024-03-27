import React from "react";

const ChildB = ({ number, button }) => {
  return (
    <div>
      <h3>Child B</h3>
      <p>{number}</p>
      {button}
    </div>
  );
};

export default ChildB;
