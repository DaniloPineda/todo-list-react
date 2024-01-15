import React from 'react';
import './ToDoAddButton.css';

function ToDoAddButton({ setOpenModal }) {
    return (
      <button className="ToDoAddButton"
        onClick={() => setOpenModal(state => !state)}
      >+</button>
    );
  }

export { ToDoAddButton };