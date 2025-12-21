import { configureStore } from '@reduxjs/toolkit'
import authReducer  from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import { api } from './api';
import { saveAuth } from '@/lib/persist';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
});

store.subscribe(() => {
    const { auth } = store.getState();
    saveAuth(auth);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;