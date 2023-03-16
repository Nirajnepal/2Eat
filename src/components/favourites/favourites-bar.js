import React from "react";
import { Text } from "react-native";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import { RestaurantInfo } from "../restaurants/restaurant-info";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <View style={styles.favouritesWrapper}>
      <View style={styles.favouritesTextWrapper}>
        <Text style={styles.favouritesText}>Favourites</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} style={styles.favouritesView}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("SingleRestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <RestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favouritesWrapper: {
    padding: 10,
  },
  favouritesTextWrapper: {
    marginLeft: 3,
  },
  favouritesText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  favouritesView: {
    marginLeft: 3,
  },
});
