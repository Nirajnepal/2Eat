import React, { useContext } from "react";

import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { CreditCardInput } from "../components/credit-card";
import { CartContext } from "../../services/cart/cart.context";
import { Avatar } from "react-native-paper";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  if (!cart.length || !restaurant) {
    return (
      <SafeAreaView style={styles.cartIconContainer}>
        <Avatar.Icon size={120} icon="cart-off" />
        <Text style={styles.cartText}>Your cart is empty!</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>restaurant: {JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartIconContainer: {
    position: "absolute",
    marginTop: 320,
    marginStart: 130,
  },
  cartText: {
    marginTop: 12,
  },
});
