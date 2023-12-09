import React  from 'react';
import { TaskProvider } from './TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskApp() {
    return (
        <TaskProvider>
            <h1>ToDo List</h1>
            <AddTask />
            <TaskList />
        </TaskProvider>
    );
}

