import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} key= {todo.id + todo.name} handleToggle={handleToggle} />
                );
            })}
            <button style = {{margin:'20px'}} onClick={handleFilter}>Clear Completed Tasks
            </button>
        </div>
    );
};

export default ToDoList;