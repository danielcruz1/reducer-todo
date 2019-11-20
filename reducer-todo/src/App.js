import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { initialState, reducer } from './reducers/todoReducer';
import './App.css';


function App() {

  return (
    <div className="App">
      <h1>REDUCERS FOR THE WIN!</h1>
          <ToDoForm />
          
    </div>
  );
}

export default App;
