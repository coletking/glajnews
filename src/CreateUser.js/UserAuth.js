'use client'
import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase"
import {onAuthStateChanged} from 'firebase/auth'; 
import { getusers } from "@/Services/GetUser.service";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


  async function logout() {
    try {
      window.localStorage.removeItem("token")
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
      // Handle logout errors
    }
  }

  useEffect(() => {
    const unsubscribe = window.localStorage.getItem("token")
    setCurrentUser(unsubscribe)
  }, [currentUser]); // Empty dependency array for initial setup

  const value = {
    currentUser,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
