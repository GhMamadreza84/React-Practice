import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Button from "./Button";
import StyledDiv from "./StyledDiv";
const Parent = () => {
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    setNumber((number) => number + 1);
  };
  return (
    <div>
      <StyledDiv>
        <h3>Parent</h3>
        <button onClick={() => setNumber((number) => number + 1)}>+</button>
        <ChildA number={number} setNumber={setNumber} />
        <ChildB
          number={number}
          button={<Button clickHandler={clickHandler} />}
        />
      </StyledDiv>
    </div>
  );
};

export default Parent;
