import React, { useState, createContext, useRef } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        let errorCode = e.code;
        let errorMessage = "";
        switch (errorCode) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password";
            break;
          case "auth/user-not-found":
            errorMessage = "User not found";
            break;
          case "auth/too-many-requests":
            errorMessage =
              "Too many unsuccessful login attempts. Please try again later.";
            break;
          default:
            errorMessage =
              "An error occurred while logging in. Please try again later.";
        }
        setError(errorMessage);
        // console.log(error);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        let errorCode = e.code;
        let errorMessage = "";
        switch (errorCode) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address";
            break;
          case "auth/weak-password":
            errorMessage = "Password should be at least 6 characters";
            break;
          // Add more cases for other error codes if needed
          default:
            errorMessage =
              "An error occurred while registering. Please try again later.";
        }
        setError(errorMessage);
        console.log(e);
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        clearError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
