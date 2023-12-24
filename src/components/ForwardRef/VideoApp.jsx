import React, { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

function VideoApp() {
    const videoRef = useRef();

  return (
    <>
        <button className="border border-gray-500 p-1 mr-1 bg-green-600 text-white" type="button" onClick={ () => videoRef.current.play() }>Play</button>
        <button className="border border-gray-500 p-1 mr-1 bg-red-600 text-white" type="button" onClick={ () =>  videoRef.current.pause() }>Pause</button>
        <VideoPlayer ref={videoRef} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" width="250" />
    </>
  )
}

export default VideoApp