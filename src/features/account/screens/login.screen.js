import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const image = require("../../../../assets/home.jpg");

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, clearError } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.imageBackgroundOverlay} />
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>2Eat</Text>
        </View>
        <View style={styles.accountContainer}>
          <TextInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => {
              setEmail(u);
              clearError();
            }}
            style={styles.textInputForm}
          />
          <View style={styles.spacer}>
            <TextInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              secure
              onChangeText={(p) => {
                setPassword(p);
                clearError();
              }}
              style={styles.textInputForm}
            />
          </View>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
          <View style={styles.spacer}>
            <Button
              icon="lock-open-outline"
              mode="contained"
              title="Login"
              style={styles.button}
              onPress={() => onLogin(email, password)}
            >
              Login
            </Button>
          </View>
        </View>
        <View style={styles.backSpacer}>
          <Button mode="contained" onPress={() => navigation.goBack()}>
            Back
          </Button>
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
    zIndex: 0,
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
    marginTop: 20,
  },
  backSpacer: {
    marginTop: 40,
    width: "30%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#696AC3",
    padding: 2,
    color: "white",
    borderRadius: 0,
  },
  textInputForm: {
    width: 300,
  },
  errorContainer: {
    maxWidth: 300,
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  errorText: {
    color: "#D0421B",
  },
});
