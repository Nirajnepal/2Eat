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

export const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.imageBackgroundOverlay} />
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>2Eat</Text>
        </View>
        <View style={styles.accountContainer}>
          <Button
            icon="lock-open-outline"
            mode="contained"
            title="Login"
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Button>
          <View style={styles.spacer}>
            <Button
              icon="email"
              title="Register"
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>
          </View>
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
  titleContainer: {
    marginTop: "30%",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  accountContainer: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 10,
    marginTop: "25%",
    width: "80%",
    height: "40%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
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
