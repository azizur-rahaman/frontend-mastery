'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/slices/themeSlice';
import { loadTheme, saveTheme } from '@/lib/persist';
import type { RootState, AppDispatch } from '@/store/store';

export default function ThemeHydrator() {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const saved = loadTheme();
    if (saved === 'light' || saved === 'dark') {
      dispatch(setTheme(saved));
    }
  }, [dispatch]);

  useEffect(() => {
    saveTheme(mode);
    document.body.dataset.theme = mode;
  }, [mode]);

  return null;
}
