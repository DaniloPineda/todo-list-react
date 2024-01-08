import React from "react";

function useLocalStorage(itenName, initValue) {
    let toDosList = initValue;
    const persistedToDos = localStorage.getItem(itenName);
    if (persistedToDos) toDosList = JSON.parse(persistedToDos);

    const [item, setItem] = React.useState(toDosList);


    const saveItem = (newToDos) => {
      localStorage.setItem(itenName, JSON.stringify(newToDos));
      setItem(newToDos);
    }

    return [item, saveItem];
  }

  export { useLocalStorage }