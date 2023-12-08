import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

let nextId = 3;
const initialState = [
    {
        id: 0,
        text: 'Visit Kafka Museum',
        done: true
    },
    {
        id: 1,
        text: 'Watch a puppet show',
        done: false
    },
    {
        id: 2,
        text: 'Lennon Wall pic',
        done: false
    }
]

function tasksReducer(tasks, action){
    switch (action.type) {
        case 'ADD': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        
        case 'EDIT': {
            return tasks.map(t => {
                if(t.id === action.task.id){
                    return action.task;
                }else{
                    return t;
                }
            });
        } 
        
        case 'DELETE': {
            return tasks.filter(t => t.id !== action.id);
        }

        default:
            throw Error('Unknown action: ', +action.type);
    }
}

export default function ReducerToDo(){
    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    
    function handleAddTask(text){
        dispatch({
            type: 'ADD',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task){
        dispatch({
            type: "EDIT",
            task: task
        });
    }

    function handleDeleteTask(taskId){
        dispatch({
            type: "DELETE",
            id: taskId
        });
    }
    return(
        <>
            <h1>TODO list</h1>
            <AddTask onAddTask = { handleAddTask }/>
            <TaskList tasks={tasks} onChangeTask={ handleChangeTask } onDeleteTask = { handleDeleteTask } />
        </>
    );
}
