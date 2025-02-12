import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeroSection />
      <Features />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
