import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>

      <FlatList
        data={[
          { name: 1, key: "1" },
          { name: 2, key: "2" },
          { name: 3, key: "3" },
          { name: 4, key: "4" },
          { name: 5, key: "5" },
          { name: 6, key: "6" },
          { name: 7, key: "7" },
          { name: 8, key: "8" },
          { name: 9, key: "9" },
          { name: 10, key: "10" },
          { name: 11, key: "11" },
          { name: 12, key: "12" },
          { name: 13, key: "13" },
          { name: 14, key: "14" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.listItem} key={item.key}>
            <RestaurantInfoCard />
          </View>
        )}
        keyExtractor={(item) => item.key}
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
