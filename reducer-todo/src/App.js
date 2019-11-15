import React, { useReducer } from 'react';
import ToDoList from './components/TodoList';
import { state, reducer } from './reducers/todoReducer';
import './App.css';


function App() {

const [{item, completed, id}, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <h1>REDUCERS FOR THE WIN!</h1>
        <div className='todo-list'>
          <ToDoList state={state} />
        </div>
    </div>
  );
}

export default App;
