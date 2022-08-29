
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAiTCmT5g3VihUOXvurSzAeNaETCmTZ2_E",
  authDomain: "alodie-21bff.firebaseapp.com",
  projectId: "alodie-21bff",
  storageBucket: "alodie-21bff.appspot.com",
  messagingSenderId: "503308893536",
  appId: "1:503308893536:web:487e5bdd540b196f777205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
