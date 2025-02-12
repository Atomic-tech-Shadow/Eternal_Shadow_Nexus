import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background: #ff8800;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border-radius: 5px;
`;

function ThemeToggle({ setTheme }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };

  return <ToggleButton onClick={toggleTheme}>{darkMode ? "🌞" : "🌙"}</ToggleButton>;
}

export default ThemeToggle;
