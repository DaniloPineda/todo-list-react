import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    const {
        item: toDos, 
        saveItem: saveToDos, 
        loading, 
        error
      } = useLocalStorage('TODOS', []);
      const [searchValue, setSearchValue] = React.useState('');
     
      const [openModal, setOpenModal] = React.useState(false);
    
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
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
      }

      const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({ text, completed: false});
        saveToDos(newToDos)
      }

    return (
        <ToDoContext.Provider value={
			{
				loading,
				error,
				completedToDos, 
				totalToDos,
				searchValue,
				setSearchValue,
				filteredToDos,
				completeToDo,
				deleteToDo,
        openModal,
        setOpenModal,
        addToDo,
			}
		}>
			{children}
		</ToDoContext.Provider>
    )
}
export { ToDoContext, ToDoProvider }
