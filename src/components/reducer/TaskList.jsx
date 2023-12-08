import React, { useState } from 'react'

function TaskList({ tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul>
      { tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onEdit={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  )
}

export default TaskList;


function Task({ task, onEdit, onDelete}){
  const [isEditing, setIsEditing] = useState(false);
  
  let taskContent;
  if(isEditing){
    taskContent = (
      <>
        <input type="text" value={task.text} onChange={e => onEdit({ ...task, text: e.target.value })} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  }else{
      taskContent = (
        <>
          {task.text}
          <button onClick={e => setIsEditing(true)}>Edit</button>
        </>
      )
  }
  return(
    <label>
      <input type="checkbox" checked={task.done} onChange={e => { onEdit({ ...task, done: e.target.checked })} } />
      {taskContent}
      <button onClick={ () => onDelete(task.id)}>Delete</button>
    </label>
  )
}