import React, { useState, useEffect, useRef } from 'react'

const Welcome = () => {
    const ref = useRef(null);
  
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(1000);

        return () => {
            animation.stop();
        };
    },[]);

    return (
        <h1 ref={ref}
        style={{
            opacity:0,
            color: 'white',
            padding: 50,
            textAlign: 'center',
            fontSize: 50,
            backgroundImage: 'radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)'
        }}>
            Welcome
        </h1>
    );
}

class FadeInAnimation {
    constructor(node) {
      this.node = node;
    }
    start(duration) {
      this.duration = duration;
      if (this.duration === 0) {
        // Jump to end immediately
        this.onProgress(1);
      } else {
        this.onProgress(0);
        // Start animating
        this.startTime = performance.now();
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
    }
    onFrame() {
      const timePassed = performance.now() - this.startTime;
      const progress = Math.min(timePassed / this.duration, 1);
      this.onProgress(progress);
      if (progress < 1) {
        // We still have more frames to paint
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
    }
    onProgress(progress) {
      this.node.style.opacity = progress;
    }
    stop() {
      cancelAnimationFrame(this.frameId);
      this.startTime = null;
      this.frameId = null;
      this.duration = 0;
    }
}  

function Animation() {
    const [show, setShow] = useState(false);
    return(
        <>
            <button className='border border-gray-500 bg-black text-white rounded-md px-2 py-1' onClick={() => setShow(!show)}>{show ? 'Remove' : 'Show'}</button>
            {show && <Welcome />}
        </>
    );
}


export default Animation;
