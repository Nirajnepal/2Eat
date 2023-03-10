import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { StyleSheet, StatusBar } from "react-native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/features/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/features/services/location/location.context";
import { Navigation } from "./src/features/services/navigation/index";

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
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
          <ExpoStatusBar style="auto" />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 10,
  },
  listItem: {
    marginBottom: 10,
  },
});
