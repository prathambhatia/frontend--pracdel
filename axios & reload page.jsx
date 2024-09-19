import { useState,memo, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3000/todos')
    .then(res => {
      setTodos(res.data.todos);
    }).catch(err => console.log(err))
  },[]);

  function reloadPage() {
    window.location.reload();
  }
  
  return (
    <div>
      <button onClick={reloadPage}>Reload Page</button>
      {todos.map(todo => <Todo key={todo.id} title = {todo.title} description = {todo.description}></Todo>)}
    </div>
  )
  }
  function Todo({title,description}) {
    return (
      <div>
    <h1>
      {title}
    </h1>
    <br />
    <p>{description}</p>
    </div>
    )
  }

  export default App;

