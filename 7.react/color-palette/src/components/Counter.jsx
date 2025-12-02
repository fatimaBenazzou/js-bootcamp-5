import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const incrementByAmount = (amount) => setCount(count + amount);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => incrementByAmount(10)}>+10</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
