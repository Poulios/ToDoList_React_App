import React from 'react';
import { ReactComponent as Icon } from './trash-solid.svg';

function DeleteToDo({  todo, setToDoList }) {
    function handleDeleteToDo() {
      const confirmed = window.confirm("Are you sure you want to delete it?");
      if (confirmed) {
        setToDoList((prevTodos) => {
          return prevTodos.filter((t) => t.id !== todo.id);
        });
      }
    }
  
    return (
      <Icon style= {{marginLeft:'10px', paddingBottom:'5px', width:'20px', height:'20px'}} onClick={handleDeleteToDo} alt='trash icon'></Icon>      
    );
  }

  export default DeleteToDo;