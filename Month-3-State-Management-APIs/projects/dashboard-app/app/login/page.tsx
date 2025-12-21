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
    };

    return(
        <main style={{ padding: 24 }}>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit" style={{marginLeft:8}}>Login</button>
            </form>
        </main>
    )
}