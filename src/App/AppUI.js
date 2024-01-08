import { ToDoAddButton } from "../ToDoAddButton";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";

function AppUI({
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    filteredToDos,
    completeToDo,
    deleteToDo
}) {
    return(<>
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
      </>)
    
}

export { AppUI }