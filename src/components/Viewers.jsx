import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Viewers = (props) => {
  // State to track the playing status of videos
  const [playing, setPlaying] = useState({
    disney: false,
    pixar: false,
    marvel: false,
    starwars: false,
    national: false
  });

  // References to video elements
  const videoRefs = {
    disney: useRef(null),
    pixar: useRef(null),
    marvel: useRef(null),
    starwars: useRef(null),
    national: useRef(null)
  };

  // Function to handle play event
  const handlePlay = (key) => {
    setPlaying(prev => ({ ...prev, [key]: true }));
  };

  // Function to handle pause event
  const handlePause = (key) => {
    setPlaying(prev => ({ ...prev, [key]: false }));
  };

  return (
    <Container>
      <Wrap
        onMouseEnter={() => handlePlay('disney')}
        onMouseLeave={() => handlePause('disney')}
      >
        {!playing.disney && <img src="/images/viewers-disney.png" alt="Disney" />}
        <video
          ref={videoRefs.disney}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          onPlay={() => handlePlay('disney')}
          onPause={() => handlePause('disney')}
        >
          <source className='disney' src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => handlePlay('pixar')}
        onMouseLeave={() => handlePause('pixar')}
      >
        {!playing.pixar && <img src="/images/viewers-pixar.png" alt="Pixar" />}
        <video
          ref={videoRefs.pixar}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          onPlay={() => handlePlay('pixar')}
          onPause={() => handlePause('pixar')}
        >
          <source src="/videos/j.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => handlePlay('marvel')}
        onMouseLeave={() => handlePause('marvel')}
      >
        {!playing.marvel && <img src="/images/viewers-marvel.png" alt="Marvel" />}
        <video
          ref={videoRefs.marvel}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          onPlay={() => handlePlay('marvel')}
          onPause={() => handlePause('marvel')}
        >
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => handlePlay('starwars')}
        onMouseLeave={() => handlePause('starwars')}
      >
        {!playing.starwars && <img src="/images/viewers-starwars.png" alt="Star Wars" />}
        <video
          ref={videoRefs.starwars}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          onPlay={() => handlePlay('starwars')}
          onPause={() => handlePause('starwars')}
        >
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => handlePlay('national')}
        onMouseLeave={() => handlePause('national')}
      >
        {!playing.national && <img src="/images/viewers-national.png" alt="National Geographic" />}
        <video
          ref={videoRefs.national}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          onPlay={() => handlePlay('national')}
          onPause={() => handlePause('national')}
        >
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
    margin-top: 30px;
    width: 88%;
    margin-left: 6%;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
    padding-top: 58.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 130%;
    height: 118%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  disney{
    width :30%;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;


