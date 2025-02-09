import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Eternal Shadow Nexus</h1>
        <p>Un site unique pour les passionnés d'anime, manga et informatique.</p>
        <div className="hero-buttons">
          <button className="btn">Découvrir</button>
          <button className="btn">S'inscrire</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
