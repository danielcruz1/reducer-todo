import React from 'react';
import { state } from '../reducers/todoReducer';

const ToDoList = () => {
    return (
        <div className='todo-card'>
            <p>{state.item}</p>     
        </div>
    )
}

export default ToDoList; 