import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.oncontextmenu = () => false; // Disable right-click

      // Create custom play/pause button
      const playButton = document.createElement('button');
      playButton.textContent = 'Play';
      playButton.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playButton.textContent = 'Pause';
        } else {
          video.pause();
          playButton.textContent = 'Play';
        }
      });
      video.parentNode.insertBefore(playButton, video);
    }
  }, []);

  return (
    <video ref={videoRef}  controls={false} height='500px' >
      <source src={videoUrl} type="video/mp4"  />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
