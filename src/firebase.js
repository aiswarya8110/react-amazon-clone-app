import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWD77TV_b5f2ceY-YKxReB3nve28oJbIw",
    authDomain: "clone-7d890.firebaseapp.com",
    projectId: "clone-7d890",
    storageBucket: "clone-7d890.appspot.com",
    messagingSenderId: "647833804768",
    appId: "1:647833804768:web:24cd057ce9d75a3e959585",
    measurementId: "G-JS943ZDT53"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export {signInWithEmailAndPassword, 
       createUserWithEmailAndPassword, 
       onAuthStateChanged, signOut, auth };