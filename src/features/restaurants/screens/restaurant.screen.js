import React, { useContext } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { RestaurantDetail } from "./restaurant-details.screen";

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
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
      <Search />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <View style={styles.listItem} key={item.userRatingsTotal}>
              <RestaurantInfoCard restaurant={item} />
            </View>
          </Pressable>
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
