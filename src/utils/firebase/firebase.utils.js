import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log("userSnapshot", userSnapshot);
  console.log("userSnapshot.exists()", userSnapshot.exists());
};
