import { useState } from "react";

function App(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => count >0 && setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}

export default App;