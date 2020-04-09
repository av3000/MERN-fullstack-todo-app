import React from 'react';
import './App.css';
import TodoList from './TodoList';

const TodoComponent = {
  width: "400px",
  margin: "30px auto",
  minHeight: "200px",
  boxSizing: "border-box",
  textAlign: "center",
  padding: "20px"
}

function App() {
  return (
    <div style={TodoComponent}>
      <TodoList />
    </div>
  );
}

export default App;
