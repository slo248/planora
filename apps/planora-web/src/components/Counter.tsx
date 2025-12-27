import { useState } from "react";

export interface CounterProps {
  start?: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start ?? 0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
