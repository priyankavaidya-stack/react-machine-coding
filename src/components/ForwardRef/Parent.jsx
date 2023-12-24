import React, { useRef, useState } from 'react';
import Child from './Child';

function Parent() {
    const [inputMsg, setInputMsg] = useState("Priyanka");
    const inputRef = useRef(null);

    function handleEditClick(){
        inputRef.current.focus();
    }

    function handleShowMsg(){
        setInputMsg(inputRef.current.value);
    }

  return (
    <>
        <div>{inputMsg}</div>
        <Child label="Enter your name:" input={inputMsg} ref={inputRef}  />
        <button type="button" onClick={ handleEditClick }>Edit</button>
        <button type="button" onClick={ handleShowMsg }>Show</button>
    </>
  );
}

export default Parent