'use client';

import NavBar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserForm from "@/components/UserForm";
import UserTable from "@/components/UserTable";

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <main style={{ padding: 24 }}>
            <NavBar />
            <h1>Dashboard</h1>
            <UserForm />
            <UserTable />
            </main>
        </ProtectedRoute>
    )
}