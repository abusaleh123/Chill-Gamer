
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDbk_FMvSURirMlCBNJneD0EVulhSlfkck",
  authDomain: "chill-game-6f6c6.firebaseapp.com",
  projectId: "chill-game-6f6c6",
  storageBucket: "chill-game-6f6c6.firebasestorage.app",
  messagingSenderId: "407465257147",
  appId: "1:407465257147:web:48ae8e36bc83072bda619e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth