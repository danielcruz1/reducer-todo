import React from 'react';
import { state } from '../reducers/todoReducer';

const ToDoList = (props) => {
    console.log('Todo Component Props: ', props)
    return (
        <div className='todo-list'>
           {props.state.map(item => {
                return (
                    <div style={item.completed ? {textDecoration:'line-through'} : null} key={item.id} >
                        <p onClick={() => {props.dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id })}}>{item.item}</p>
                    </div>   
                ) 
            })}
        </div>
    )
}

export default ToDoList; 