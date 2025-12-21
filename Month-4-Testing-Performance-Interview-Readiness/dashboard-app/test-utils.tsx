import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/authSlice';
import themeReducer from '@/store/slices/themeSlice';
import { api } from '@/store/api';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    ...renderOptions
  }: any = {}
) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      theme: themeReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });

  return render(
    <Provider store={store}>
      {ui}
    </Provider>,
    renderOptions
  );
}
