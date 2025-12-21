'use client';
import { loadAuth, saveAuth } from "@/lib/persist";
import { hydrate } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthHydrator() {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);

    // hydrate on first mount
    useEffect(() => {
        const saved = loadAuth();
        if(saved) dispatch(hydrate(saved));
    }, [dispatch]);

    // persist on change
    useEffect(() => {
        if(auth.user) saveAuth(auth);
    }, [auth]);

    return null;
}