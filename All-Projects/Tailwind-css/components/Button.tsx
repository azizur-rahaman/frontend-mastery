interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export const Button = ({label, onClick, variant = "primary"} : ButtonProps) => {
    const base = "px-4 py-2 rounded font-semibold transition";
    const style = 
                variant === "primary"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return <button onClick={onClick} className={`${base} ${style}`}>{label}</button>
}