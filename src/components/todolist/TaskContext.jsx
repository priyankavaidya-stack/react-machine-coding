import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);


export default function TaskProvider({ children }){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks );

    return(
        <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    {children}
                </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

function tasksReducer(tasks, action){
    switch(action.type){
        case "ADD": {
            return [...tasks,{
                id: action.id,
                text: action.text,
                done: false
            }]
        }
        case "EDIT": {
            return tasks.map(t=> {
                if(t.id === action.task.id){
                    return action.task;
                }else{
                    return t;
                }
            })

        }
        case "DELETE": {
            return tasks.filter((task)=> task.id !== action.id)
        }
        default: {
            throw error ("Unknown error: ", action.type); 
        }
    }
}

const initialTasks = [
    {
        id : 0,
        text: "Drawing",
        done: true
    },
    {
        id : 1,
        text: "Painting",
        done: false
    },
    {
        id : 2,
        text: "Sketching",
        done: false
    }
]
