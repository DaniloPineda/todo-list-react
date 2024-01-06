import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoAddButton } from './ToDoAddButton';
import React from 'react';

const defaultTodos = [
  {text:'Cortar Cebolla', completed: true },
  {text:'Tomar el Curso de React.js', completed: false },
  {text:'Llorar con la llorona', completed: false },
  {text:'Tomar café', completed: false },
];
function App() {
  const [toDos, setToDos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const totalToDos = toDos.length;
  const completedToDos = toDos.filter(({ completed }) => !!completed).length;
  const filteredToDos = toDos.filter(({text}) => text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeToDo = (todoText) => {
    const toDoIndex = toDos.findIndex(({text}) => text === todoText);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  }

  const deleteToDo = (todoText) => {
    const toDoIndex = toDos.findIndex(({text}) => text === todoText);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1)
    setToDos(newToDos);
  }

  return (
    <>
      <ToDoCounter total={totalToDos} completed={completedToDos}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ToDoList>
        {filteredToDos.map(({text, completed}) => (
          <ToDoItem 
            key={text} 
            completed={completed} 
            text={text}
            onComplete={() => completeToDo(text)}
            onDelete={() => deleteToDo(text)}
            />
        ))}
      </ToDoList>

      <ToDoAddButton/>
    </>
  );
}

export default App;
