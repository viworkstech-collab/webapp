import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ViworkTech</h1>
      </div>

      <div className={menuOpen ? "menu active" : "menu"}>
  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
  <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
  <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
  <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

  <button className="contact-btn">
    Get in Touch
  </button>
</div>

<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
    </nav>
  );
};

export default Navbar;