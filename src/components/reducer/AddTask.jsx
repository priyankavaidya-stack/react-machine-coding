import React, { useState } from 'react'

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleChange(e){
    setText(e.target.value);
  }

  function handleClick(){
    setText("");
    onAddTask(text);
  }

  return (
    <>
      <input type="text" value={text} onChange={ handleChange } />
      <button onClick={ handleClick }>Add</button>
    </>
  )
}

export default AddTask
