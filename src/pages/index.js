import './globals.css'
import Rolate from '@/components/Rolate';
import { useEffect, useState } from 'react';
// import firebase from '../firebase'
import { app } from '../firebase'
import { getMessaging, getToken } from "firebase/messaging";

function Index() {

    const [fcmUniqueToken, setFcmUniqueToken] = useState("")

    async function requestPermission() {
      const permission = await Notification.requestPermission();
      if(permission === 'granted') {
          // generate token
          const token = await getToken(getMessaging(app), {
              vapidKey: "BIF6vHcD1_yhmm6izeoFVMnkTproV5x6e_Jx2fH9uSRjzmuI01RilZJMCLBkkx-9ZZDaBa5zzC1Wu-8qcRqojMw"
          })
          console.log("token", token)
          setFcmUniqueToken(token)
      } else if(permission === 'denied') {
          // notification denied
          alert("You denied for the notification")
      }
    }

    useEffect(async () => {
      requestPermission()
    }, [])
    

  const [rolateName, setRolateName] = useState("")

  function onSubmit(e){
    e.preventDefault();
    if(e.target.elements.rolatename.value && e.target.elements.rolatename.value!== "") {
      setRolateName(e.target.elements.rolatename.value)
    }
  }

  if(rolateName && rolateName !== "") {
    return <Rolate name={rolateName} />
  }
  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Rolate name"
            aria-label="Rolate name"
            name='rolatename'
            id='rolatename'
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
      <h5>{fcmUniqueToken}</h5>
    </div>
  );
}

export default Index;
