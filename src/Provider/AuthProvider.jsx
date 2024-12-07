import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider

    const registerWithEmailPass  = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailPass =(email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,  email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
        
    }

    const googleSgnIn = (auth, provider) =>  {
        setLoading(true)
            return signInWithPopup(auth, provider)
    }


    const updateProfiler = (updatedProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedProfile);
    }
    useEffect( () => {
        const unsubscribe =   onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
            //   console.log('CurrentUser',currentUser);
              setLoading(false)
          })
          return () => {
            // setLoading(true)
              unsubscribe();
          }
      }, [])


const authInfo = {
    user,
    registerWithEmailPass,
    loginWithEmailPass,
    googleSgnIn,
    provider,
    setUser,
    logOut,
    updateProfiler,
    setLoading
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;