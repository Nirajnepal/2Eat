import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import WebView from "react-native-webview";

export const RestaurantInfo = ({ restaurant }) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <WebView
          style={styles.imageRestaurant}
          source={{ uri: restaurant.photos[0] }}
        />
      </View>
      <Text style={styles.restaurantText}>{restaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
  },
  restaurantText: {
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Lato_400Regular",
  },
  imageContainer: {
    width: 120,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageRestaurant: {
    width: "100%",
    height: "100%",
  },
});
