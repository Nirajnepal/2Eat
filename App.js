import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "./src/features/restaurants/screens/restaurant.settings";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeAreaView style={styles.container}>
    <SettingScreen />
  </SafeAreaView>
);
const Map = () => (
  <SafeAreaView style={styles.container}>
    <Text>Map</Text>
  </SafeAreaView>
);

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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Restaurants") {
                iconName = "md-restaurant";
              } else if (route.name === "Settings") {
                iconName = "md-settings";
              } else if (route.name === "Map") {
                iconName = "md-map";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
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
