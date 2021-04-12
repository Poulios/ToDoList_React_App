import React from 'react';
/* import ToDo from './ToDo'; */

const ToDoList = ({toDoList, handleToggle, handleFilter, handleSort}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <table>
            <caption>
                <h1>                    
                My To Do List
                </h1>
            </caption>
            <thead>    
                <tr>
                <th>
                    Description
                </th>
                <th>
                    Due Date
                </th>
                </tr>     
            </thead>
        <tbody>
            {toDoList.map( (todo) => {
                return (
                    <tr key={todo.id} id={todo.id} onClick={handleClick} name="todo" value={todo.id} className={todo.condition ? "strike" : ""}>
                    <td>{todo.name}</td>
                    <td>{todo.due && todo.due} {!todo.due && '-'} </td>
                    </tr>
                )                    
            }
            )}
        </tbody>
        </table>           
    );
};

export default ToDoList;