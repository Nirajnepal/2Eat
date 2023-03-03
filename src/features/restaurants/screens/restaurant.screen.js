import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
} from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            animating={true}
            color={MD2Colors.blue}
            style={{ marginLeft: -25 }}
          />
        </View>
      )}
      <View style={styles.search}>
        <Searchbar />
      </View>

      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <View style={styles.listItem} key={item.userRatingsTotal}>
            <RestaurantInfoCard restaurant={item} />
          </View>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  listItem: {
    marginBottom: 10,
  },
});
