import { deleteAuth, loadAuth } from "@/lib/persist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
    user: string | null;
    token: string | null;
    isAuthenticated: boolean,
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    ...loadAuth(), // hydrate from localStorage
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: string; token: string }> ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout:(state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            deleteAuth();
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;