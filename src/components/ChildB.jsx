import React from "react";
import StyledDiv from "./StyledDiv";

const ChildB = ({ number, button }) => {
  return (
    <StyledDiv>
      <h3>Child B</h3>
      <p>{number}</p>
      {button}
    </StyledDiv>
  );
};

export default ChildB;
