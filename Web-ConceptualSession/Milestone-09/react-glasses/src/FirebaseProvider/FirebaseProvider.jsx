import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfige";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setUser(null)
        signOut(auth)
    }

    //Google Login
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }

    //Github Login
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
    }

    //Twitter Login
    const twitterLogin = () => {
        signInWithPopup(auth, twitterProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])
    const Allvalue = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={Allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;