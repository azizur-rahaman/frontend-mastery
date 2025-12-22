'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/slices/themeSlice';
import { logout } from '@/store/slices/authSlice';
import { clearAuth } from '@/lib/persist';
import type { RootState, AppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const router = useRouter();

  const signOut = () => {
    clearAuth();
    dispatch(logout());
    router.push('/login');
  };

  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ccc' }}>
      <button onClick={() => dispatch(toggleTheme())}>
        {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <button onClick={signOut} style={{ marginLeft: 12 }}>
        Logout
      </button>
    </nav>
  );
}

export default memo(Navbar);