import React from 'react';
import TaskProvider from './TaskContext';
import Addtask from './Addtask.jsx';
import TaskList from './TaskList';

export default function App() {
  return (
    <TaskProvider>
        TODO LIST
        <Addtask />
        <TaskList />
    </TaskProvider>
  );
}

