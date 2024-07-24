import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1FlRK0K-T3qUUdPrKsk54i5S0VC9LSV8",
  authDomain: "discord-clone-83e9e.firebaseapp.com",
  projectId: "discord-clone-83e9e",
  storageBucket: "discord-clone-83e9e.appspot.com",
  messagingSenderId: "191284415261",
  appId: "1:191284415261:web:955c472b4f8d37deadeff4",
  measurementId: "G-MR4ZQY200C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
