import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";

const image = require("../../../../assets/home.jpg");

export const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.imageBackgroundOverlay} />
        <View style={styles.accountContainer}>
          <Text>Register Screen</Text>
        </View>
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
  imageBackgroundOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  accountContainer: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 10,
    margin: "75%",
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  spacer: {
    marginTop: 5,
  },
  button: {
    backgroundColor: "#696AC3",
    padding: 2,
    color: "white",
    borderRadius: 0,
  },
});
