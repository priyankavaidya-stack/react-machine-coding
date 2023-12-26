import { useRef, useLayoutEffect, useEffect } from 'react';

function App() {
    const inputRef = useRef();
    
    useEffect(()=>{
        inputRef.current.value = "Another user";
    },[]);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);

  return (
    <>
        <input type="text" value="Priyanka Vaidya" ref={inputRef} />
    </>
  )
}

export default App;