// 'use client';
// export const saveAuth = (state: any) => localStorage.setItem('auth', JSON.stringify(state));
// export const loadAuth = () => JSON.parse(localStorage.getItem('auth') || '{}')
// export const deleteAuth = () => localStorage.removeItem('auth');

import { AuthState } from '@/store/slices/authSlice';

const KEY = 'auth';

export const saveAuth = (state: AuthState) => {
    localStorage.setItem(KEY, JSON.stringify(state));
};

export const loadAuth = () : AuthState | null => {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
}

export const clearAuth = () => {
    localStorage.removeItem(KEY);
}