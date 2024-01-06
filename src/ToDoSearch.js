import React from 'react';
import './ToDoSearch.css';

function ToDoSearch({searchValue, setSearchValue}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="ToDoSearch"
      value={searchValue}
      onChange={({ target }) => setSearchValue(target.value)}
    />
  );
}

export { ToDoSearch };