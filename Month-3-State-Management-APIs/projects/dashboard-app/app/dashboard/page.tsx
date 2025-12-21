'use client';

import UserForm from "@/components/UserForm";
import UserTable from "@/components/UserTable";

export default function DashboardPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Dashboard</h1>
            <UserForm />
            <UserTable />
        </main>
    )
}