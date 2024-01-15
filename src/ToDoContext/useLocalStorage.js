import React from "react";

function useLocalStorage(itemName, initValue) {
  const [item, setItem] = React.useState(initValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let toDosList = initValue;
        const persistedToDos = localStorage.getItem(itemName);
        if (persistedToDos) {
          toDosList = JSON.parse(persistedToDos);
          setItem(toDosList);
        }
  
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [])

   


    const saveItem = (newToDos) => {
      localStorage.setItem(itemName, JSON.stringify(newToDos));
      setItem(newToDos);
    }

    return {item, saveItem, loading, error};
  }

  export { useLocalStorage }