import React from 'react';
import './ToDoSearch.css';
import { ToDoContext } from '../ToDoContext';

function ToDoSearch() {
  const {searchValue, setSearchValue} = React.useContext(ToDoContext)
  return (
    <input
      placeholder="Buscar..."
      className="ToDoSearch"
      value={searchValue}
      onChange={({ target }) => setSearchValue(target.value)}
    />
  );
}

export { ToDoSearch };