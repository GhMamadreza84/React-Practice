import { useState } from "react";

const Photos = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <h1>Botostart</h1>
      {isShow && <h2>React course</h2>}
      <button onClick={() => setIsShow((isShow) => !isShow)}>toggle</button>
    </div>
  );
};

export default Photos;
