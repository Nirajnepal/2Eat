import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LoginPage from "../../../components/login";
import RegisterPage from "../../../components/register";

const SettingScreen = () => {
  const [showLogin, setShowLogin] = React.useState(true);

  const handleLoginPress = () => setShowLogin(true);
  const handleRegisterPress = () => setShowLogin(false);

  return (
    <View style={styles.container}>
      {showLogin ? <LoginPage /> : <RegisterPage />}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  buttonContainer: {
    flexDirection: "row",
    // marginTop: 60,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#9C27B0",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SettingScreen;
