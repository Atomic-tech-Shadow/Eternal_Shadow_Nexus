import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: linear-gradient(90deg, #ff4c29, #ff007f);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 15px rgba(255, 76, 41, 0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(90deg, #ff007f, #ff4c29);
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 76, 41, 0.7);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AnimatedButton = ({ text, onClick }) => {
  return (
    <Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default AnimatedButton;
