import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/authSlice';
import themeReducer from '@/store/slices/themeSlice';
import { api } from '@/store/api';
import type { RootState } from '@/store/store';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState,
    ...renderOptions
  }: {
    preloadedState?: Partial<RootState>;
  } & Omit<RenderOptions, 'wrapper'> = {}
) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      theme: themeReducer,
      [api.reducerPath]: api.reducer,
    } as any,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState: preloadedState as any,
  });

  return render(
    <Provider store={store}>
      {ui}
    </Provider>,
    renderOptions
  );
}
