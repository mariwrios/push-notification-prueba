import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDU35giu5R-rCXE2RJCRA2TQDPsb1okZzc",
    authDomain: "push-notification-react-65d3c.firebaseapp.com",
    projectId: "push-notification-react-65d3c",
    storageBucket: "push-notification-react-65d3c.appspot.com",
    messagingSenderId: "658556037848",
    appId: "1:658556037848:web:4771291a9b2df59e2d45ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase