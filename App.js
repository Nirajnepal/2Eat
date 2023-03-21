import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { StyleSheet, StatusBar } from "react-native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/features/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/features/services/location/location.context";
import { FavouritesContextProvider } from "./src/features/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/features/services/authentication/authentication.context";
import { Navigation } from "./src/features/services/navigation/index";
import firebase, { initializeApp } from "firebase/app";

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
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
              <ExpoStatusBar style="auto" />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}
