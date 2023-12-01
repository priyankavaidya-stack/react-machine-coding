import React, { useRef, useState } from 'react';

const RefHookUse = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    // let [intervalId, setIntervalId] = useState(null);
   

    // To store the initial value of timer for stopwatch
    const intervalRef = useRef(null);
    // useRef returns an object like this:
    // { 
    //     current: 0 // The value you passed to useRef
    // }

    function handleStart(){
        // start counting
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        // intervalId = setInterval(().....//
        intervalRef.current = setInterval(() => {
            // Update the current time every 10ms.
            setNow(Date.now());
        },10);
        // setIntervalId(intervalId);
    }

    function handleStop(){
        // stop counting
        // clearInterval(intervalId);
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime != null && now != null){
        secondsPassed = (now - startTime) / 1000;
    }


  return (
        <>
            <h1 style={{ margin: "10px"}}>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button style={{ border: "1px solid grey", backgroundColor: "green", color:"white", margin: "5px 10px",padding:"5px 10px"}} onClick={handleStart}>Start</button>
            <button style={{ border: "1px solid grey", backgroundColor: "red", color:"white", padding:"5px 10px"}} onClick={handleStop}>Stop</button>
        </>
    )
}

export default RefHookUse
