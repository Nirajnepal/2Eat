import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <View style={styles.SearchContainer}>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    padding: 16,
    position: "absolute",
    zIndex: 999,
    top: 40,
    width: "100%",
  },
});
