import { EmptyToDos } from "../EmptyToDos";
import { Modal } from "../Modal";
import { ToDoAddButton } from "../ToDoAddButton";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoForm } from "../ToDoForm";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import { ToDosError } from "../ToDosError";
import { ToDosLoading } from "../ToDosLoading";

function AppUI() {

    return(
    <>
      <ToDoCounter/>
      <ToDoSearch/>

      <ToDoContext.Consumer>
        {({
          loading, 
          error, 
          filteredToDos, 
          completeToDo, 
          deleteToDo, 
          openModal,
          setOpenModal
        }) => (
          <>
            <ToDoList>
              { loading && 
                <>
                  <ToDosLoading />
                  <ToDosLoading />
                  <ToDosLoading />
                </>
              }
              { error && <ToDosError />}
              { (!loading && filteredToDos.length === 0 ) && <EmptyToDos />}
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
            <ToDoAddButton setOpenModal={setOpenModal}/>
            { openModal && (
              <Modal>
                <ToDoForm />
              </Modal>
            )}
          </>
        )}
      </ToDoContext.Consumer>
  
    </>)
  
}

export { AppUI }