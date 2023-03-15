import React from "react";

import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="SingleRestaurants"
        component={RestaurantScreen}
        options={{
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <RestaurantStack.Screen
        name="SingleRestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
