import React from "react";

import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { CreditCardInput } from "../components/credit-card";

export const CheckoutScreen = () => (
  <SafeAreaView style={styles.container}>
    <CreditCardInput />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
