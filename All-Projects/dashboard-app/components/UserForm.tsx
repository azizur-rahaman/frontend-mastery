import { useAddUserMutation } from "@/store/api";
import React, { useState } from "react";

export default function UserForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [addUser, {isLoading}] = useAddUserMutation();

    const submit = async(e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !email)return;

        await addUser({name, email, username: name.toLowerCase().replace(' ', '')});

        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={submit} style={{ marginBottom: 24 }}>
            <h3>Add User</h3>

            <input 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginLeft: 8 }}
            />

            <button type="submit" disabled={isLoading} style={{ marginLeft: 8 }}>
                {isLoading ? 'Adding...' : 'Add'}
            </button>
        </form>
    )
}