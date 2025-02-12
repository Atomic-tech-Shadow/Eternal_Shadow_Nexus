import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff0000, #ff8800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function HeroSection() {
  return (
    <HeroContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <Title initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        Eternal Shadow Nexus
      </Title>
    </HeroContainer>
  );
}

export default HeroSection;
