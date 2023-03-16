import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

import { FavouritesContext } from "../../features/services/favourites/favourites.context";

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      style={styles.favouritesIcon}
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favouritesIcon: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 9,
  },
});
