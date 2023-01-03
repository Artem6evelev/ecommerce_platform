import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4FUl9kD3U_9HsLbwJtdXhT8OBuw31rdY",
  authDomain: "artcodesh-ecommerce-db.firebaseapp.com",
  projectId: "artcodesh-ecommerce-db",
  storageBucket: "artcodesh-ecommerce-db.appspot.com",
  messagingSenderId: "566491439030",
  appId: "1:566491439030:web:c b7cebef39cac96a0c2b17",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
