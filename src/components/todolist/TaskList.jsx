import React, { useState, useContext } from 'react';
import { TasksContext, TasksDispatchContext} from './TaskContext';

function TaskList() {
    const tasks = useContext(TasksContext);
  return (
    <div>
        <ul>
            { tasks.map((task) => (
                <li key={task.id}>
                 <Task task={task} />
                </li>
            ))}
        </ul>
    </div>
  )
}

function Task({ task }){
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);

    let taskContent;

    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={e => {
              dispatch({
                type: "EDIT",
                task: {
                    ...task,
                    text: e.target.value
                }
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return(
        <label>
        <input type="checkbox" checked={task.done} onChange={(e) => {
           dispatch({
            type: "EDIT",
            task: {
                ...task,
                done: e.target.checked
            }
           });
        }} />
        {taskContent}
        <button onClick={()=> {
                dispatch({
                    type: "DELETE",
                    id: task.id
                });
            }}
        >Delete</button>
    </label>
    );
}

export default TaskList