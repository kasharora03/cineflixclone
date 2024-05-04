import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from "firebase/auth";
import { auth, db } from '../services/firebase';
import {doc, setDoc} from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe();
        }
    })
    async function signUp(email, password) {
    try {
        // Create new account
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', user.email), {
            favShows: [],
        });
        await setDoc(doc(db, 'message', user.email), {
            message:[],
        });
        setUser(user);
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            throw new Error('This email is already registered. Please use a different email.');
        } else {
            console.error('Error signing up:', error);
            throw error; 
        }
    }
}

    
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
export function UserAuth() {
    return useContext(AuthContext);
}