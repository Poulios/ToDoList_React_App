import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');
    const [ userDate, setUserDate ] = useState('');

    const handleChangeText = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleChangeDate = (e) => {
        setUserDate(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput, userDate);
        setUserInput("");
        setUserDate("")
    }

    const today = new Date();
    const date = today.toLocaleDateString()
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChangeText} placeholder="Enter task..."/>
            <input value={userDate} type="date" onChange={handleChangeDate} id="start" name="dateDue" min={date} max=""></input>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;