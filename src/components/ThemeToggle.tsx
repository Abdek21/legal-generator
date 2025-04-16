'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Défaut en light

  useEffect(() => {
    // Charger le thème depuis localStorage, sinon utiliser light par défaut
    const current = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(current || 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('theme-change'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600"
      aria-label={`Basculer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}