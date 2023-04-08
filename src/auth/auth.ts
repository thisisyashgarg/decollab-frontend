import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9N0abGk4CEcN_QDLSELueh4mbpQ7a1aQ",
  authDomain: "decollab.firebaseapp.com",
  projectId: "decollab",
  storageBucket: "decollab.appspot.com",
  messagingSenderId: "515722649643",
  appId: "1:515722649643:web:b91ee32449db7a02a3ca6e",
  measurementId: "G-SB68CQJ1BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
