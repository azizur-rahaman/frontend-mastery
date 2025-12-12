import { useState } from "react";

function Form(){
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}`);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Input your thoughts!"
            />
            <button type="submit">Submit</button>
        </form>
    )
}