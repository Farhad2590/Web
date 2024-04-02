import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('Observing current user inside useEffect of Authprovider', currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={user ,loading,createUser, signInUser,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.node
}