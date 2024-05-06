
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDgLEJhrVLIP3Dfrb_QgIb119263a_JJOE",
  authDomain: "full-stack-65e94.firebaseapp.com",
  projectId: "full-stack-65e94",
  storageBucket: "full-stack-65e94.appspot.com",
  messagingSenderId: "1030030243594",
  appId: "1:1030030243594:web:46b30182f695f73e7aacf3",
  measurementId: "G-4WNFNTGYEN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export default firebaseConfig;


export { app, auth}

