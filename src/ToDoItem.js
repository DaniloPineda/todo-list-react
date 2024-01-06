import './ToDoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function ToDoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className="ToDoItem">
      <CompleteIcon completed={completed} onComplete={onComplete}/>

      <p className={`ToDoItem-p ${completed && "ToDoItem-p--complete"}`}>
        {text}
      </p>

      <DeleteIcon onDelete={onDelete}/>
    </li>
  );
}

export { ToDoItem };