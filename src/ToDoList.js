import React from 'react';
import DeleteToDo from './DeleteToDo'; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const ToDoList = ({toDoList, setToDoList, handleToggle, handleFilter, requestSort, getClassNamesFor}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Press to sort by due date
        </Tooltip>
      );
    
    return (
        <div>
            <Table striped bordered hover size="sm">            
            <thead> 
                <tr>
                    <td colSpan='2'> 
                        <h1> My To Do List
                            </h1>      
                        </td> 
                </tr>  
                <tr>
                    <th id='descrption'>
                        Description
                    </th>
                    <th>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Button variant="light" 
                            onClick={() => requestSort('due')}
                            className={getClassNamesFor('price')}>Due date
                        </Button>
                    </OverlayTrigger>
                    </th>
                </tr>     
            </thead>
            <tbody>
                {toDoList.map( (todo) => {
                    return (
                        <tr key={todo.name + todo.id} id={todo.id} onDoubleClick={handleClick} name="todo" value={todo.id} className={todo.condition ? "strike" : ""}>
                        <td id='descrption'>{todo.name} </td>
                        <td id='dueDate'>{todo.due && todo.due} {!todo.due && '2021-03-01'} 
                        <DeleteToDo todo= {todo} setToDoList= {setToDoList}/></td>
                        </tr>
                    )                    
                }
                )}
            </tbody>
        </Table>       
        <span>
                <Button style = {{margin:'10px'}} onClick={handleFilter}>Clear Completed Tasks
                </Button>
        </span>
        </div>
    );
};

export default ToDoList;