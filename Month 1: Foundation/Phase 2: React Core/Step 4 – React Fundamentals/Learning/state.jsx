import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const fruits = ["Apple", "Banana", "Orange"];

    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count+1)}>+</button>
                <button onClick={() => setCount(count != 0 && count - 1)}>-</button>
            </div>
            <ul>
                {fruites.map((fruite, index) => (
                     <h1>fruite</h1>
                ))}
            </ul>
        </>
    )
}