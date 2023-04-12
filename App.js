import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { AuthenticationContextProvider } from "./src/features/services/authentication/authentication.context";
import { Navigation } from "./src/features/services/navigation/index";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEBJiJDudZIhLXtHMoHErDxRQD4sJq42Q",
  authDomain: "eat-bfbed.firebaseapp.com",
  projectId: "eat-bfbed",
  storageBucket: "eat-bfbed.appspot.com",
  messagingSenderId: "587180269657",
  appId: "1:587180269657:web:ed2b64273611c0639a1148",
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
        <ExpoStatusBar style="auto" />
      </AuthenticationContextProvider>
    </>
  );
}
