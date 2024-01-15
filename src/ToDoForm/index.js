import React from 'react';
import './ToDoForm.css'
import { ToDoContext } from '../ToDoContext';

function ToDoForm() {
    const { 
        addToDo, 
        setOpenModal } = React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Hacer Ejercicio"
                value={newToDoValue}
                onChange={onChange}/>
            <div className="TodoForm-actionsContainer">
                <button
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel">
                    Cancelar</button>
                <button
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add">
                    Añadir</button>
            </div>
        </form>
    )
}

export { ToDoForm }