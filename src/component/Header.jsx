import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import About from './pages/About';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <Home />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
