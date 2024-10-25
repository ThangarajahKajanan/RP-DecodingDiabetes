import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCi2l1xSWh5QjdFW7eQdJ2ONw5lzs818LU",
  authDomain: "decoding-diabetes.firebaseapp.com",
  projectId: "decoding-diabetes",
  storageBucket: "decoding-diabetes.appspot.com",
  messagingSenderId: "89942818615",
  appId: "1:89942818615:web:8d5d4cb8b704b00fa7a4b2",
  measurementId: "G-1LMGRR5Z87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);


export { app, auth, firestore, storage, database };
