import React, { useState } from 'react';
import data from "./data.json";
import Header from "./Header.js";
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

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, name: userInput, condition: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />   
      <ToDoList toDoList = {toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
