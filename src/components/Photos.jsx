import { useState } from "react";

const Photos = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <h1>Botostart</h1>
      <h3>React course</h3>
      <button>toggle</button>
    </div>
  );
};

export default Photos;
