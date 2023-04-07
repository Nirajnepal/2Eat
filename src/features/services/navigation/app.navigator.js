import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../map/screens/map.screen";
import { CheckoutScreen } from "../../checkout/screens/checkout.screen";
import { FavouritesContextProvider } from "../favourites/favourites.context";
import { RestaurantsContextProvider } from "../restaurants/restaurants.context";
import { LocationContextProvider } from "../location/location.context";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
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

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
// });
