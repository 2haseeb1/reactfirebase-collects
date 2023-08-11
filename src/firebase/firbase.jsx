

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBtNagaiX8NlqVNFkoqG14R7FIIYA8krRg",
  authDomain: "my-react-auth-firebase-9-36am.firebaseapp.com",
  projectId: "my-react-auth-firebase-9-36am",
  storageBucket: "my-react-auth-firebase-9-36am.appspot.com",
  messagingSenderId: "355952551587",
  appId: "1:355952551587:web:1c1ebaa659627984280116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 




export { auth };