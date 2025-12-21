'use client';

import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoute({
    children
}: { children: React.ReactNode}) {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
        if(!user) router.replace('/login');
    }, [user, router]);

    if(!user) return null;
    return <>{children}</>;
};