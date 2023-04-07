import React, { useContext } from "react";

import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from "react-native";
import { CreditCardInput } from "../components/credit-card";
import { CartContext } from "../../services/cart/cart.context";
import { Avatar, List } from "react-native-paper";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
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
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <View style={styles.spacer}>
          <View style={styles.textSpacer}>
            <Text style={styles.cartText}>Your Order</Text>
          </View>
          <List.Section style={styles.listSection}>
            {cart.map(({ item, price }) => {
              return (
                <List.Item
                  style={styles.listItem}
                  title={`${item} - ${price / 100}`}
                  titleStyle={styles.listItemTitle}
                />
              );
            })}
          </List.Section>
          <Text style={styles.totalText}>Total: {sum / 100}</Text>
        </View>
        <CreditCardInput />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartIconContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    marginTop: 10,
    fontSize: 20,
    color: "#666666",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20 /* add some horizontal padding */,
    paddingTop: 10 /* add some top padding */,
  },
  spacer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textSpacer: {
    marginTop: 16,
  },
  orderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  listSection: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 16,
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemTitle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  creditCardInput: {
    marginHorizontal: 16,
  },
});
