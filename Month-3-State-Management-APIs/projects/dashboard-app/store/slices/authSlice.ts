import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface AuthState {
    user: string | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: string; token: string }> ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout:(state) => {
            state.user = null;
            state.token = null;
        },
        hydrate: (_state, action: PayloadAction<AuthState>) => {
            return action.payload;
        }
    }
});

export const { login, logout, hydrate } = authSlice.actions;
export default authSlice.reducer;