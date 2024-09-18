import { useState,memo, useEffect } from 'react';
import './App.css';

function App() {
  
  const [count,setCount] = useState(0)

  return (
    <div>
      <ButtonComponent />
      <button onClick={() => {
        setCount(count + 1);
      }}> Click me {count}</button>
    </div>
  )
}
const ButtonComponent = memo(()=>{
  console.log("child render")

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  )
})

export default App;

