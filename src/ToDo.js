import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (        
        <table>
            <tbody>
                <tr key={todo.id} name="todo" value={todo.id} onClick={handleClick} className={todo.condition ? "strike" : ""}>
                    <td>{todo.name}</td>
                    <td>{todo.due && todo.due} {!todo.due && '-'} </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ToDo;