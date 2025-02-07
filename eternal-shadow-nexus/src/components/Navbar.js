import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="logo">Eternal Shadow Nexus</div>
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#anime">Anime</a></li>
        <li><a href="#manga">Manga</a></li>
        <li><a href="#videos">Vidéos</a></li>
        <li><a href="#informatique">Informatique</a></li>
        <li><a href="#download">Téléchargements</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
