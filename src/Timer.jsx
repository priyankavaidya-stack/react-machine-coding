import React ,{useState, useEffect} from 'react';
import CountDownTimer from './components/CountDownTimer.jsx';


const Timer = () => {
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    let [second, setSecond] = useState("00");
    let [intervalId, setIntervalId] = useState("");

    function handleHourChange(e){
        const value = e.target.value.slice(0,2);
        setHour(value);
    }
    function handleMinuteChange(e){
        const value = e.target.value.slice(0,2);
        setMinute(value);
    }
    function handleSecondChange(e){
        const value = e.target.value.slice(0,2);
        setSecond(value);
    }

    function handleStart(){
            const id  = setInterval(()=>{
                timer();
            },1000);
            setIntervalId(id);
    }
        

    function timer(){
        if(hour == "" && minute == "" && second == "")return;
        if(second != 0){
            setSecond("0"+--second);
        }else if(minute != 0  && second != 0){
            setMinute("0"+minute);
        }
    }

    function handleStop(){
        intervalId = "";
        
    }

    function handleReset(){
        setHour("");
        setMinute("");
        setSecond("");
        clearInterval(intervalId);
    }

  return (
    <div className='flex flex-col justify-center items-center max-w-full h-screen'>
        <div className='flex justify-center items-center'>
            <CountDownTimer label="Hour" value={hour} onChange={handleHourChange}/>
            <CountDownTimer label="Minute" value={minute} onChange={handleMinuteChange}/>
            <CountDownTimer label="Second" value={second} onChange={handleSecondChange}/>
        </div>
      <div className='flex justify-evenly items-center'>
        <button className='py-2 px-5 bg-green-700 text-white' onClick={handleStart}>Start</button>
        <button className='py-2 px-5 bg-red-700 text-white' onClick={handleStop}>Stop</button>
        <button className='py-2 px-5 bg-orange-500 text-white' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer;
