import { useState } from "react";
import StyledDiv from "./StyledDiv";

const ChildA = ({ number, setNumber }) => {
  return (
    <StyledDiv>
      <h3>Child A</h3>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </StyledDiv>
  );
};

export default ChildA;
