'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className='rounded-full cursor-pointer'
      aria-label='Toggle Theme'
    >
      {theme === 'dark' ? (
        <FaSun className='h-5 w-5 text-white' />
      ) : (
        <FaMoon className='h-5 w-5 text-gray-800' />
      )}
    </button>
  );
}
