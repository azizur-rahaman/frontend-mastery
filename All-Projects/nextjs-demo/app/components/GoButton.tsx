"use client";

import { useRouter } from "next/navigation";

export default function GoButton({route, label}: {route: string, label: string}){
    const router = useRouter();
    return (
        <button
        onClick={() => router.push(route)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
        >
            {label}
        </button>
    )
}