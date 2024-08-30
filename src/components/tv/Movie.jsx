import React, { useState } from 'react';
import styled from 'styled-components';

function Movies() {
  const images = [
    "https://lumiere-a.akamaihd.net/v1/images/simpsons_s33_social_16x9_1920x1080_en_v1_xxxxxx_395a8f3b.png?region=0,0,1920,1080&width=960",
    "https://i.ytimg.com/vi/cD9lkk7aQuQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCE0juocNDMN6wUAIlHVNgCS7S_Cg",
    "https://upload.wikimedia.org/wikipedia/en/c/c9/YehHaiChahateinTitleCard.webp",
    "https://m.media-amazon.com/images/M/MV5BNWMyYmExZGMtNDVlZC00MzhkLWFmYTItNTk0YWU5MDQ2YTAyXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg",
    "https://www.tellyupdates.com/wp-content/uploads/2019/12/Kundali-Bhagya.jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5410/775410-h",
    "https://www.justwatch.com/images/backdrop/310238538/s640/season-1/season-1",
    "https://static.abplive.com/wp-content/uploads/2019/02/27191444/PCTV-18293-hcdl.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fcd4ed66385769.5b14d95c65301.jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1882/311882-h",
    "https://www.newsx.com/wp-content/uploads/2020/02/barrister-babu-086809-KVoyhUPZ.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/213EA03F2F1EBD7974EF259CF3398E7C018E6D84E4E6A524A7C7A374322139B7/scale?width=1200&aspectRatio=1.78&format=webp",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/715A9235849E816D4C8A43E462FC3277ADB2EC3F709B5FBDEB509589E0FFD142/scale?width=1200&aspectRatio=1.78&format=webp",
    "https://media.licdn.com/dms/image/D4D12AQFA0NeUflPHZA/article-cover_image-shrink_720_1280/0/1653425672921?e=2147483647&v=beta&t=oqEEIKdMV6uHAHb6XReOOQdUHgl1RK_lTlaNewcnc2Y",
    "https://i.ytimg.com/vi/hNcbIWfk4eA/maxresdefault.jpg"
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {images.slice(0, 16).map((image, index) => (
          <Wrap key={index} onClick={() => openLightbox(image)}>
            <img src={image} alt={`Movie ${index}`} />
          </Wrap>
        ))}
      </Content>
      {lightboxOpen && (
        <Lightbox>
          <LightboxImage src={currentImage} alt="Selected" />
          <WatchNowButton onClick={() => alert("Watch Now clicked!")}>
            Watch Now
          </WatchNowButton>
          <CloseButton onClick={closeLightbox}>Close</CloseButton>
        </Lightbox>
      )}
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 20px;
  max-width: 1429px;
  margin: 0 auto;

  h4 {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px;
  margin-left: -4%;
`;

const Wrap = styled.div`
  border-radius: 12px;
  height: 101%;
  width: 119%;
  overflow: hidden;
  border: 2px solid rgba(249, 249, 249, 0.3);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;

  img {
    width: 100%;
    height: 110%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px, rgba(0, 0, 0, 0.2) 0px 4px 8px;
    border-color: rgba(249, 249, 249, 0.6);
    cursor: pointer;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px; /* Added padding */
`;

const LightboxImage = styled.img`
  max-width: 80%;
  max-height: 70%;
  margin-bottom: 20px; /* Adds space between image and buttons */
  border: 2px solid white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: white;
`;

const WatchNowButton = styled.button`
  position: relative;
  padding: 10px 20px;
  margin-bottom: 10px; /* Adds spacing between buttons */
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 1001; /* Ensures it appears on top */

  &:hover {
    background-color: darkred;
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkgray;
  }
`;
