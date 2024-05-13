import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import axios from "axios";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)
    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
     }


    
    const logOut = async () => {
        setLoading(true)
        const { data } = await axios('http://localhost:5173/logout/logout', {
          withCredentials: true,
        })
        console.log(data)
        return signOut(auth)
      }
    

















    const updateUserProfile = (name, photo) => {
    
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
            
          })
          
          
    }
    
    


    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, user =>{
            
            setLoading(false)
            setUser(user)
    
            
          })
          return () =>{
              unSubscribe()
          }
      },[])
    
    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUserProfile,
        loading,
        googleLogin,
    
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;