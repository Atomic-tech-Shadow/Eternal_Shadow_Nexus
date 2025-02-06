import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Animation d'entrée de la page */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>✨ Eternal Shadow Nexus ✨</h1>
      </motion.div>

      {/* Section principale avec animation */}
      <motion.section
        className="content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Bienvenue sur Eternal Shadow Nexus !</p>
      </motion.section>

      {/* Bouton animé */}
      <motion.button
        className="animated-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Explorer
      </motion.button>

      {/* Pied de page animé */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p>© 2025 Eternal Shadow Nexus</p>
      </motion.footer>
    </div>
  );
}

export default App;
