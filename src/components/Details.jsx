import React, { useState } from 'react';

const SliderWithButtons = () => {
  const images = [
    'https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg',
    'https://i.ytimg.com/vi/P2Kv2K55bBs/maxresdefault.jpg',
    'https://i.ytimg.com/vi/28wSvEO7TSE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtJszBCPL2YLRlEKX6hytJeAtMDA',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const buttonStyle = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const playButtonHoverStyle = {
    backgroundColor: 'white',
    border:'2px solid white',
    color: 'gray',
  };

  const trailerButtonHoverStyle = {
    backgroundColor: 'lightgray',
    border:'2px solid white',
    color: 'white',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', perspective: '1000px', width: '100%', height: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                minWidth: '100%',
                height: '600px',
                objectFit: 'cover',
                transform: `rotateY(${currentIndex === index ? 0 : 45}deg)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            />
          ))}
        </div>
        <button
          style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1 }}
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1 }}
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '-100px', zIndex: 2, position: 'relative' }}>
        {/* Play Button */}
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, playButtonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, buttonStyle);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8L5.472 11.133V4.867L10.804 8z" />
          </svg>
          Play
        </button>

        {/* Trailer Button */}
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, trailerButtonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, buttonStyle);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a7 7 0 1 0 6.93 8.467 7 7 0 0 0-6.93-8.467zm-.865 12.184L8.72 9.216H6.365L7.05 7.575 4.737 5.37l2.256 3.67H7.27l-1.135 2.144z" />
          </svg>
          Trailer
        </button>
      </div>
    </div>
  );
};

export default SliderWithButtons;
