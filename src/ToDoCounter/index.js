import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';

function ToDoCounter() {
  const {completedToDos, totalToDos } = React.useContext(ToDoContext);
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> TODOs
    </h1>
  );
}

export { ToDoCounter };