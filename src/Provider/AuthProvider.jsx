import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider

    const registerWithEmailPass  = (email, password) => {
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
            return signInWithPopup(auth, provider)
    }


const authInfo = {
    user,
    registerWithEmailPass,
    loginWithEmailPass,
    googleSgnIn,
    provider,
    setUser,
    logOut
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;