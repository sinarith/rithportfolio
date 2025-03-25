import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo"><Link to="/">My Portfolio</Link></div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      <DarkModeToggle />
    </header>
  );
};

export default Header;
