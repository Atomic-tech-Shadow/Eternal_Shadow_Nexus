import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Bienvenue sur Eternal Shadow Nexus</h1>
      <p>Le portail ultime de l'univers Anime, Manga et Informatique</p>
      <motion.button whileHover={{ scale: 1.1 }}>Explorer</motion.button>
    </motion.section>
  );
};

export default Hero;
