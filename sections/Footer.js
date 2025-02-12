import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 30px;
  background: #111;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    font-size: 1.5rem;
    color: #ff8800;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ff0000;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Text>© 2025 Eternal Shadow Nexus | Tous droits réservés</Text>
      <SocialIcons>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          🐦
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          💻
        </a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          🎮
        </a>
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;
