import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS', []);
  const [searchValue, setSearchValue] = React.useState('');

  const totalToDos = toDos.length;
  const completedToDos = toDos.filter(({ completed }) => !!completed).length;
  const filteredToDos = toDos.filter(({text}) => text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeToDo = (todoText) => {
    const toDoIndex = toDos.findIndex(({text}) => text === todoText);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = (todoText) => {
    const toDoIndex = toDos.findIndex(({text}) => text === todoText);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos);
  }

  return (
   <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredToDos={filteredToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
   />
  );
}

export default App;
