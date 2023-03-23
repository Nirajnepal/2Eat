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
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.imageBackgroundOverlay} />
        <View style={styles.accountContainer}>
          <TextInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
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
              onChangeText={(p) => setPassword(p)}
              style={styles.textInputForm}
            />
          </View>
          {error && (
            <View size="large">
              <Text variant="error">{error}</Text>
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
  accountContainer: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 10,
    margin: "60%",
    width: "80%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    marginTop: 20,
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
});
