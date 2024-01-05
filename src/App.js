import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoAddButton } from './ToDoAddButton';

const defaultTodos = [
  {text:'Cortar Cebolla', completed: true },
  {text:'Tomar el Curso de React.js', completed: false },
  {text:'Llorar con la llorona', completed: false },
  {text:'Tomar café', completed: false },
];
function App() {
  return (
    <>
      <ToDoCounter total='25' completed='16'/>
      <ToDoSearch/>

      <ToDoList>
        {defaultTodos.map(({text, completed}) => (
          <ToDoItem 
            key={text} 
            completed={completed} 
            text={text}/>
        ))}
      </ToDoList>

      <ToDoAddButton/>
    </>
  );
}

export default App;
