import { useState } from "react";

const Photos = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      {isShow && <h1>React course</h1>}
      <button onClick={() => setIsShow((isShow) => !isShow)}>toggle</button>
    </div>
  );
};

export default Photos;
