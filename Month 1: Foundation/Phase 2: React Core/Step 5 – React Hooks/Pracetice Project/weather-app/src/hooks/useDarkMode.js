import { useEffect, useState } from "react";


function useDarkMode(){
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === "dark";
    });

    useEffect(() => {
        document.body.className = dark ? "dark" : "light";
        localStorage.setItem('theme', dark ? "dark" : "light");
    }, [dark]);

    return [dark, setDark];
}

export default useDarkMode;