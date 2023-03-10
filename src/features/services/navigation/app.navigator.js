import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import SettingScreen from "../../restaurants/screens/restaurant.settings";
import { RestaurantsNavigator } from "./restaurant.navigator";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = tabIcon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

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

export const AppNavigator = () => (
  <NavigationContainer headerMode="none">
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Map" component={Map} options={{ headerShown: false }} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
