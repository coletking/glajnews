import React from 'react';
import ReactPlayer from 'react-player';

const MediaViewer = ({ mediaUrl, mediaType}) => {
  return (
    <div>
      {mediaType === 'image' ? (
        <img src={mediaUrl} alt="Image"  className='fit-image'/>
      ) : (
        
        <ReactPlayer url={mediaUrl} controls height="50%" width="100%" />
      )}
    </div>
  );
};

export default MediaViewer;