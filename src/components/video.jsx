// VideoComponent.js

import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <video width="433" height="229" controls={false} autoPlay muted className='video1'>
        <source src="/Videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
