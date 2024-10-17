import { useState } from "react"
import { CountContext } from "./context";

//code for context.jsx 
//import { createContext } from "react";
//export const CountContext = createContext(0);


function App() {
  const [count, setCount] = useState(0);

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count count = {count} setCount = {setCount}/>
      </CountContext.Provider>
    </div>
  )
}
function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

<button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
