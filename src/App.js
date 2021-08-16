import firebase from './firebase/firebase-config'
import './App.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
   const msg = firebase.messaging();
   msg.requestPermission().then(()=>{
     return msg.getToken();
   }).then((data)=>{
     console.warn('token', data)
   })
  }, [])

  return <div className='App'>
      <h1>
          Prueba #1 de push notification
      </h1>
      <button>Recibir push notification</button>
    </div>;
  }
  export default App;
