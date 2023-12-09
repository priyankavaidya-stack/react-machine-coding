import React, { useState, useContext } from 'react';
import { TasksDispatchContext } from "./TaskContext";

export default function AddTask() {
    const [text,setText] = useState("");
    const dispatch = useContext(TasksDispatchContext);
  return (
    <>
        <input type="text" value={text} placeholder="Add task" onChange={(e) => setText(e.target.value)} />
        <button onClick={ () => {
                setText(""); 
                dispatch({
                    type: "ADD",
                    id: nextId++,
                    text: text
                });
            }}
        >Add</button>
    </>
  );
}

let nextId = 3;
