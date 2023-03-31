import React, { useContext } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("SingleRestaurantDetail", {
                restaurant: item,
              })
            }
            testID="restaurant-pressable"
          >
            <View
              style={styles.listItem}
              key={item.userRatingsTotal}
              testID={`restaurant-list-${index}`}
            >
              <RestaurantInfoCard restaurant={item} />
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
        testID="restaurant-list"
      />
    </SafeAreaView>
  ) : (
    <View style={styles.noItem}>
      <Text styles={styles.noFavourites}>No favourites yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  listItem: {
    marginBottom: 10,
  },
  noItem: {
    alignItems: "center",
    marginTop: 10,
  },
  noFavourites: {
    fontSize: 10,
    fontWeight: 10,
  },
});
