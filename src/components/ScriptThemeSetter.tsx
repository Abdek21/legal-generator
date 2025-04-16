'use client';
import { useEffect } from 'react';

export default function ScriptThemeSetter() {
  useEffect(() => {
    const html = document.documentElement;
    const theme = localStorage.getItem('theme');

    // Si aucun thème n'est défini, on définit le thème clair par défaut
    if (theme === 'dark') {
      html.classList.add('dark');
    } else if (theme === 'light') {
      html.classList.remove('dark');
    } else {
      // Par défaut, on applique le mode clair
      localStorage.setItem('theme', 'light');
      html.classList.remove('dark');
    }

    // Fonction pour appliquer le thème
    const applyTheme = () => {
      const newTheme = localStorage.getItem('theme');
      if (newTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    };

    window.addEventListener('theme-change', applyTheme);
    
    // Appeler au début pour vérifier le thème au chargement
    applyTheme();

    return () => {
      window.removeEventListener('theme-change', applyTheme);
    };
  }, []);
  
  return null;
}
