import { useState } from "react";


export default function useOperation() {
  const [count, setCount] = useState(0);

  const handleSetFunction = (operation) => {
    let newCount = count;

    if (operation) {
      newCount =
        (operation === '-' ? count - 1 : 0) +
        (operation === '+' ? count + 1 : 0);
    }

    setCount(newCount);
  };

  return [count, handleSetFunction];
}
