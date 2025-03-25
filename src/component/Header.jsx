import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
