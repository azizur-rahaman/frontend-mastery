import { useState, useEffect } from "react";

export function SearchBar({search}){

    const [query, setQuery] = useState("");

    useEffect(() => {
        search("Harry");
    }, []);

    return (
        <div className="search-bar-section">
            <input className="search-bar" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for movies..."></input>
            <button className="search-button" onClick={() => search(query)}>Search</button>
        </div>
    );
}