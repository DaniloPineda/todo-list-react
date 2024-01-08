import './ToDoAddButton.css';

function ToDoAddButton() {
    return (
      <button className="ToDoAddButton"
        onClick={() => console.log('le diste click')}
      >+</button>
    );
  }

export { ToDoAddButton };