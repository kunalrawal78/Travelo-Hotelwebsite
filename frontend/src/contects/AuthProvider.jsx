import React, { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import  app  from '../firebase/firebase.config';

// Create context for authentication
export const AuthContext = createContext();

// Initialize Firebase authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State for current user
  const [loading, setLoading] = useState(true); // State for loading state

  // Function to create user with email and password
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error creating user:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to sign in with email and password
  const login = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to sign in with Google
  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to sign out
  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state
      setLoading(false); // Set loading to false after authentication state change
    });
    
    // Clean-up function
    return () => unsubscribe();
  }, []);

  // Context value
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    loginWithGoogle,
    logout,
  };

  // Provide the AuthContext to children components
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider> 
  );
};

export default AuthProvider;
