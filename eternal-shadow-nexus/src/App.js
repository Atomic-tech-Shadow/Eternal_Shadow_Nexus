import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimeSection from "./components/AnimeSection";
import MangaSection from "./components/MangaSection";
import VideosSection from "./components/VideosSection";
import InformatiqueSection from "./components/InformatiqueSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AnimeSection />
      <MangaSection />
      <VideosSection />
      <InformatiqueSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
