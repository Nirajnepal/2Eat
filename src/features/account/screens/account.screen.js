import React from "react";
import { Text, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

const image = require("../../../../assets/home.jpg");

export const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>AccountScreen</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
