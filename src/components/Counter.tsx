// this does NOT work (alias is certainly not working)
// import { useState } from "react";

// this DOES work
import { useState } from "preact/hooks";

export default () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
