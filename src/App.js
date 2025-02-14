import React from "react";
import { motion } from "framer-motion";
import "./styles/global.css";

function App() {
  return (
    <motion.div 
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <header className="header">
        <h1 className="title">Eternal Shadow Nexus</h1>
        <p className="subtitle">Le site d’anime ultime</p>
      </header>

      <motion.button 
        className="btn-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explorer
      </motion.button>

      <footer className="footer">
        <p>© 2025 Eternal Shadow Nexus. Tous droits réservés.</p>
      </footer>
    </motion.div>
  );
}

export default App;
