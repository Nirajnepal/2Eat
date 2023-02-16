import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant 1",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
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
              <Text variant="label" style={{ color: "red" }}>
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
  card: { backgroundColor: "white" },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  info: {
    padding: 16,
  },
  title: {
    fontFamily: "Lato_400Regular",
    fontSize: 20,
  },
  address: {
    fontFamily: "Oswald_400Regular",
    fontSize: 12,
  },
  rating: {
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantInfoStatus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
