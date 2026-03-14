import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]); 

  const [count, setCount] = useState(0);
  
  const addTodo = () => { 
    const text = prompt("Введите задачу"); 
    
    if (!text) return; 
      
    const newTodo = { 
      id: count, 
      text: text 
    };
    setCount(count => count + 1)
    setTodos([...todos, newTodo]); 
  }; 
  
  return ( 
    <div style={{ padding: "40px" }}> 
    <h1>Todo List</h1> 
    <button onClick={addTodo}> Добавить задачу </button> 
    <ul> {todos.map(todo => ( 
      <li key={todo.id}> {todo.text} </li> 
    ))} 
    </ul> 
    </div> 
    ); 
}

export default App
