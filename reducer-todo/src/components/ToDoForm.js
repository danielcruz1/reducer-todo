import React, {useState, useReducer} from 'react';
import ToDoList from './ToDoList';
import { initialState, reducer } from '../reducers/todoReducer';

const ToDoForm = () =>  {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputText, setInputText] = useState('')

    const handleChanges = event => {
        setInputText(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: inputText })
        setInputText('')
    }

    const clearForm = event => {
        event.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED', payload: state})
    }

    return (
        <div>
            <form>
                <label htmlFor='todo'>Enter Todo</label>
                <input 
                id='todo'
                type='text'
                name='todo'
                value={inputText}
                onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Add Item</button>
                <button onClick={clearForm}>Clear Completed</button>
            </form>
            <ToDoList state={state} dispatch={dispatch} />
        </div>
    )
}

export default ToDoForm;