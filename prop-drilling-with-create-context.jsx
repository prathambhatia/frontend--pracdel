import { useState, useContext } from "react"
import { CountContext } from "./context";

//import { createContext } from "react";
//export const CountContext = createContext({
    //count,setCount
//}); context.jsx file

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
function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
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
