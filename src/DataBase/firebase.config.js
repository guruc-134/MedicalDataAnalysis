// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhEoinfUCuncGOa527vSXBHHWiFCO0wtw",
  authDomain: "csd-project-003.firebaseapp.com",
  projectId: "csd-project-003",
  storageBucket: "csd-project-003.appspot.com",
  messagingSenderId: "286632634137",
  appId: "1:286632634137:web:19a9fcbbfcfe533a0f0788",
  measurementId: "G-FR939Q26YB"
};

firebase.initializeApp(firebaseConfig)


export const firestore = firebase.firestore()
export {firebase}