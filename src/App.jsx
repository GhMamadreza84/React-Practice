import { useEffect } from "react";

import Photos from "./components/Photos";

function App() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <>
      <Photos />
    </>
  );
}

export default App;
