import React, { useState } from 'react';
import data from "./data.json";
import ToDoList from './ToDoList.js';
import ToDoForm from './ToDoForm.js';


function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map( task => {
      return task.id === Number(id) ? { ...task, condition: !task.condition} : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.condition;
    });
    setToDoList(filtered);
  }

  const handleSort = () => {
    console.log(toDoList);
    let sorted = toDoList.sort( (a,b) => a.due > b.due ? 1 : -1)
    setToDoList(sorted);
    console.log(toDoList);
    console.log(sorted);
  }

  const addTask = (userInput, userDate) => {
    console.log(toDoList);
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, name: userInput, condition: false, due: userDate }];
    setToDoList(copy);    
    console.log(toDoList);
    console.log(copy);
  }

  return (
    <div className="App">
      {/* <Header />  */}  
      <ToDoList toDoList = {toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleSort={handleSort} />
      <ToDoForm addTask={addTask} />
      <button type="button" onClick={handleSort}>Sort by due date
      </button>
    </div>
  );
}

export default App;
