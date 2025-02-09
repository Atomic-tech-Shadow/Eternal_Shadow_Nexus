import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Eternal Shadow Nexus</h1>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Anime</a></li>
        <li><a href="#">Manga</a></li>
        <li><a href="#">Vidéos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
