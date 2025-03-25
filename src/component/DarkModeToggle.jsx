import React, { useState, useEffect } from 'react';
import '../styles/dark-mode.scss';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
