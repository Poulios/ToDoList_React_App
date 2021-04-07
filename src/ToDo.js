import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} name="todo" value={todo.id} onClick={handleClick} className={todo.condition ? "strike" : ""}>
            {todo.name}
        </div>
    );
};

export default ToDo;