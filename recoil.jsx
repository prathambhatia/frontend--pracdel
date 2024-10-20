import React from 'react';
import {  useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

  function Count() {
    return (
    <div>
        <CountRenderer />
        <Buttons />
    </div>
    )
  }

function CountRenderer() {
  console.log('re-rendering')
  const count = useRecoilValue(countAtom);
  return <div> <b>{count}</b> </div>
}

function Buttons() {
  //console.log('re-rendering')
  //const [count, setCount] = useRecoilState(countAtom);  

  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}> Decrease</button>
  </div>
}
export default App;

//count.jsx for atom file
import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});


