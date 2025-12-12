import { useState } from "react";


const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </main>
  );
};

export default App;
