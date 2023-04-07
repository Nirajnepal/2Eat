import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../services/location/location.context";

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <View style={styles.SearchContainer}>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        style={styles.SearchBar}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   SearchContainer: {
//     padding: 16,
//   },
// });

const styles = StyleSheet.create({
  SearchContainer: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderBottomColor: "#bbb",
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  SearchBar: {
    // borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 16,
  },
});
