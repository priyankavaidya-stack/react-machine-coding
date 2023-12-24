import React, { forwardRef } from 'react'

const VideoPlayer = forwardRef(function VideoPlayer({ src, width, type}, ref) {
  
    return (
    <video width={width} ref={ref}>
        <source type={type} src={src} />
    </video>
  );
});

export default VideoPlayer;