import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import the local video files
import localVideo from '../assets/videos/FilmForth Untitled.mp4'; // Make sure this path is correct
import localVide from '../assets/videos/g.mp4'; // Make sure this path is correct
import localVideos from '../assets/videos/m.mp4'; // Make sure this path is correct

const videos = [
  { src: localVideo }, // Use the imported local video
  { src: localVide }, // Use the imported local video
  { src: localVideos }, // Use the imported local video
];

const isYouTubeUrl = (url) => {
  const youtubeRegex = /(?:youtube\.com|youtu\.be)/;
  return youtubeRegex.test(url);
};

const VideoTest = () => {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play().then(() => {
          console.log("Video is playing");
        }).catch((error) => {
          console.error("Error playing video:", error);
        });
        setIsPlaying(true);
      }
    } else {
      console.error("Video element not found");
    }
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <VideoWrap>
        {isYouTubeUrl(videos[currentVideoIndex].src) ? (
          <iframe
            width="100%"
            height="100%"
            src={videos[currentVideoIndex].src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            src={videos[currentVideoIndex].src}
            controls={false}
            autoPlay={false}
            muted={false}
            style={{ height: "76%", width: "100%", objectFit: "cover" }}
          />
        )}
        <ArrowPrev onClick={handlePrevious}>
          <FaChevronLeft />
        </ArrowPrev>
        <ArrowNext onClick={handleNext}>
          <FaChevronRight />
        </ArrowNext>
        <PlayButton onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </PlayButton>
      </VideoWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const VideoWrap = styled.div`
  position: relative;
  width: 100%; /* Adjust the width to control the size of the video container */
  max-width: 100%; /* Set a maximum width to limit the size */
  aspect-ratio: 16 / 9; /* Aspect ratio for a rectangular shape */
  transition-duration: 700ms;
  overflow: hidden; /* Hide overflow to maintain aspect ratio */

  video {
    object-fit: cover;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 20px; /* Adjusted for better positioning */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(249, 249, 249, 0.8);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px; /* Increased for better readability */
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(249, 249, 249, 1);
  }
`;

const ArrowPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 10px; /* Adjusted for better alignment */
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 12px; /* Increased padding for larger clickable area */
  cursor: pointer;
  font-size: 28px; /* Increased for better visibility */
  font-weight: bold; /* Make the arrow bold */
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ArrowNext = styled.button`
  position: absolute;
  top: 50%;
  right: 10px; /* Adjusted for better alignment */
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 12px; /* Increased padding for larger clickable area */
  cursor: pointer;
  font-size: 28px; /* Increased for better visibility */
  font-weight: bold; /* Make the arrow bold */
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default VideoTest;
