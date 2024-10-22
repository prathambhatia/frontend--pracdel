import { useState } from 'react'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
  return (
  <>
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  </>
  )
 }

 function MainApp() { 
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationAtom);
  //const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      {/* <button onClick={() => {
        setMessagingAtomCount(messagingAtomCount + 1)
      }} */}
      <ButtonUpdater />
    </>
  )}
  
  function ButtonUpdater() {
    const [,setMessagingAtomCount] = useRecoilState(messagingAtom);
    //const setMessagingAtomCount = useSetRecoilState(messagingAtom);
    return <button onClick={() => {
      setMessagingAtomCount(c => c + 1);
    }}>Me</button>
  }

export default App



//atoms.js file
import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});
export const notificationAtom = atom({
    key: "notificationkAtom",
    default: 12
});
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});
