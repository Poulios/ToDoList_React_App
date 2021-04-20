import React, { useState } from 'react';
import data from "./data.json";
import ToDoList from './ToDoList.js';
import ToDoForm from './ToDoForm.js';

const useSortableData = ( {toDoList} ) => {
  const [sortConfig, setSortConfig] = useState(null);
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...toDoList];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [toDoList, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ToDoTable = ({ toDoList, setToDoList}) => {
  const { items, requestSort, sortConfig } = useSortableData( {toDoList } );
  
  const handleToggle = (id) => {
    let mapped = items.map( task => {
      return task.id === Number(id) ? { ...task, condition: !task.condition} : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = items.filter(task => {
      return !task.condition;
    });
    setToDoList(filtered);
  }
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <ToDoList toDoList = {items} setToDoList = {setToDoList} handleToggle={handleToggle} handleFilter={handleFilter} requestSort= {requestSort} getClassNamesFor={getClassNamesFor} />
  );
};

function App() {     
  const [ toDoList, setToDoList ] = useState(data); 
  
  const addTask = (userInput, userDate) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, name: userInput, condition: false, due: userDate }];
    setToDoList(copy);    
  }

  return (
    <div className="App" style={{backgroundCcolor:'61dafbab'}}>
      <ToDoTable toDoList= {toDoList} setToDoList= {setToDoList} />      
      <ToDoForm addTask= {addTask} />
    </div>
  );
}

export default App;
