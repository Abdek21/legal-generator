'use client';

import { useEffect } from 'react';

export default function ScriptThemeSetter() {
  useEffect(() => {
    const applyTheme = () => {
      const theme = localStorage.getItem('theme');
      const html = document.documentElement;

      // Par défaut, on utilise 'light' si aucun thème n'est enregistré
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
        // S'assurer que le thème est bien enregistré comme light si vide
        if (!theme) {
          localStorage.setItem('theme', 'light');
        }
      }
    };

    applyTheme();
    window.addEventListener('theme-change', applyTheme);

    return () => window.removeEventListener('theme-change', applyTheme);
  }, []);

  return null;
}