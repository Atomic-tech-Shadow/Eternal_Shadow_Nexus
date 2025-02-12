import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const FeaturesContainer = styled.section`
  padding: 100px 50px;
  text-align: center;
  background: #111;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff0000, #ff8800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const FeatureBox = styled.div`
  width: 250px;
  padding: 20px;
  background: #222;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(255, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <FeaturesContainer ref={sectionRef}>
      <Title>Fonctionnalités Épiques</Title>
      <FeaturesGrid>
        <FeatureBox>
          <FeatureText>📺 Streaming d'Anime en HD</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureText>🎶 Intégration de la musique</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureText>⚡ Téléchargements rapides</FeatureText>
        </FeatureBox>
      </FeaturesGrid>
    </FeaturesContainer>
  );
}

export default Features;
