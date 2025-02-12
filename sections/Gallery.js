import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GalleryContainer = styled.section`
  padding: 100px 50px;
  background: #000;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff0000, #ff8800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const ImageBox = styled(motion.div)`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.waifu.pics/sfw/waifu")
      .then((res) => res.json())
      .then((data) => setImages([data.url, data.url, data.url, data.url])); // 4 images random
  }, []);

  return (
    <GalleryContainer>
      <Title>Galerie d'Anime</Title>
      <Grid>
        {images.map((src, index) => (
          <ImageBox key={index} whileHover={{ scale: 1.1 }}>
            <img src={src} alt={`Anime ${index}`} />
          </ImageBox>
        ))}
      </Grid>
    </GalleryContainer>
  );
}

export default Gallery;
