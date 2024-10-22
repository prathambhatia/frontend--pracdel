import { useMemo, useState } from 'react'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
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
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  //selector is better than using useMemo
  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount +notificationsAtomCount +messagingAtomCount;
  // },[networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount])

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  )}
 
export default App



//atoms.js file
import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom);
        const messagingCount= get(messagingAtom);
        return networkCount + jobsCount + notificationCount + messagingCount
    }
})
