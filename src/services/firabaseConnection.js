import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage' 


const firebaseConfig = {
    apiKey: "AIzaSyA6-EAfco4BloVrDOcuiRtgy2p4haqyK3U",
    authDomain: "tickets-38660.firebaseapp.com",
    projectId: "tickets-38660",
    storageBucket: "tickets-38660.appspot.com",
    messagingSenderId: "960795557367",
    appId: "1:960795557367:web:75c05babf442b7a18782f2",
    measurementId: "G-HY81BBJX69"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth (firebaseApp);
const db = getFirestore(firebaseApp);
const storate = getStorage (firebaseApp);

export { auth, db, storate };