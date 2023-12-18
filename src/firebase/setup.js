
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbWJWHY4L4omIGhgv7JoZJWDz0D2UetFo",
  authDomain: "fpo-pass.firebaseapp.com",
  databaseURL: "https://fpo-pass-default-rtdb.firebaseio.com",
  projectId: "fpo-pass",
  storageBucket: "fpo-pass.appspot.com",
  messagingSenderId: "901621944258",
  appId: "1:901621944258:web:b5c7164b2a2e9ef23d905b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);