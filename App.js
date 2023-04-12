import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { AuthenticationContextProvider } from "./src/features/services/authentication/authentication.context";
import { Navigation } from "./src/features/services/navigation/index";
import { initializeApp } from "firebase/app";
import { LogBox } from "react-native";

// Ignore warning messages from credit card package
LogBox.ignoreLogs([
  "Warning: componentWillReceiveProps has been renamed",
  "Warning: Failed prop type",
]);

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
