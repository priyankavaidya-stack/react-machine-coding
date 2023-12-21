import React, { useState, useContext } from 'react';
import {TasksDispatchContext} from './TaskContext';

function Addtask() {
    const [text, setText] = useState("");
    const dispatch = useContext(TasksDispatchContext);
  return (
    <div>
        <input type="text" value={text} placeholder="Type your todo ..." onChange={(e)=>setText(e.target.value)} />
        <button onClick={ ()=>{
            setText("");
            dispatch({
                type: "ADD",
                id: newId++,
                text: text
            })
        }}>ADD</button>
    </div>
  )
}

let newId = 3;

export default Addtask;