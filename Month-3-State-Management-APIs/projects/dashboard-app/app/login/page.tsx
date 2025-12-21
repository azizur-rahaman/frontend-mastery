'use client';
import { login } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!username) return;

        // fake auth
        dispatch(login({user: username, token: 'fake-jwt-token'}));
        router.push('/dashboard');
    };

    return(
        <main className="p-6 max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={submit} className="space-y-4">
                <input 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button 
                    type="submit" 
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!username}
                >
                    Login
                </button>
            </form>
        </main>
    )
}