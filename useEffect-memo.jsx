import { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [count, setCount] = useState(0);
  //useMemo is mostly used when one value "count" depends on another "inputvalue"
  // let count = useMemo(() => {
  //   let finalCount = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //   finalCount = finalCount + i;
  // }
  // return finalCount;
  // }, [inputValue]);

  useEffect(() => {        //mostly this approached is used even tho useMemo is more efficient
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
    finalCount = finalCount + i;
  }
  setCount(finalCount);
  }, [inputValue]);
  

  return (
    <div>
      <input 
        onChange={function(e) {
          setInputValue(e.target.value);
        }} 
        placeholder={"Find sum from 1 to n"} 
      />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter + 1);
      }}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;

