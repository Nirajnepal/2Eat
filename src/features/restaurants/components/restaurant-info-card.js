import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Favourite } from "../../../components/favourites/favourites";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = " ",
    icon = " ",
    photos = [""],
    address = " ",
    isOpenNow = null,
    rating = null,
    isClosedTemporarily,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const statusTextColor = isClosedTemporarily ? "#FF3D00" : "#4CAF50";

  return (
    <Card elevation={5} style={styles.card}>
      <View>
        <Favourite restaurant={restaurant} />
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.restaurantInfo}>
          <View style={styles.rating}>
            {ratingArray.map((_, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={index.toString()}
              />
            ))}
          </View>
          <View style={styles.restaurantInfoStatus}>
            {isClosedTemporarily && (
              // eslint-disable-next-line react-native/no-inline-styles
              <Text variant="label" style={{ color: statusTextColor }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </View>
        </View>

        <Text style={styles.address}>{address}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E1F5FE",
    // borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  cover: {
    overflow: "hidden",
    borderRadius: 0,
  },
  info: {
    backgroundColor: "#E1F5FE",
    // borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    backgroundColor: "#FDB813",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#FDB813",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  restaurantInfoStatus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginRight: 10,
  },
  address: {
    fontSize: 12,
    color: "#757575",
  },
});
