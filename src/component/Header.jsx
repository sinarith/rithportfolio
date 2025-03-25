import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
