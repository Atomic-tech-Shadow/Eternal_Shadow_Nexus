import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "./styles/global.css";

const AppContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
  color: white;
  text-align: center;
  overflow: hidden;
`;

const Header = styled.header`
  margin-bottom: 30px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  opacity: 0.8;
`;

const AnimatedButton = styled(motion.button)`
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
  color: white;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(255, 65, 108, 0.3);
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    box-shadow: 0px 6px 20px rgba(255, 65, 108, 0.5);
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  font-size: 0.9rem;
  opacity: 0.7;
`;

function App() {
  return (
    <AppContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Title 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Eternal Shadow Nexus
        </Title>

        <Subtitle
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Le site d’anime ultime
        </Subtitle>
      </Header>

      <AnimatedButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explorer
      </AnimatedButton>

      <Footer>
        <p>© 2025 Eternal Shadow Nexus. Tous droits réservés.</p>
      </Footer>
    </AppContainer>
  );
}

export default App;
