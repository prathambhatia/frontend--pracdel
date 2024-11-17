//App.jsx file
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   // fetch
  //   axios.get("http://localhost:3001/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App

//atoms.js file
import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key: "networkCount",
    default: selector({
        key: "networkCountSelector",
        get: async () => {
            //await new Promise(r => setTimeout(r,5000))
            const res = await axios.get("http://localhost:3001/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
        allNotifications.jobs +
        allNotifications.messaging +
        allNotifications.notifications
    }
});
