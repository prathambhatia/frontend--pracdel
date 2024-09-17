import { useState, useEffect } from 'react'; // Import useEffect
import axios from 'axios'; // Import axios

import './App.css';

function App() {
  
    const [number, setNumber] = useState(1);
    function handleButton(id) {
      setNumber(id)
    };
    return <div>
    <button onClick={() => handleButton(1)}>1</button>
    <button onClick={() => handleButton(2)}>2</button>
    <button onClick={() => handleButton(3)}>3</button>
    <button onClick={() => handleButton(4)}>4</button>

    <Todo id={number} />
  </div>
}
function Todo({id}) {
  const [todo, setTodos] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/todo?id=${id}`)
      .then(response => {
        setTodos(response.data.todo)
      })
  },[id]);

  return <div>
    Id : {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;
