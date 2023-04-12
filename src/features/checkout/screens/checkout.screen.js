import React, { useContext, useState } from "react";

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
import { Avatar, List, TextInput, Button } from "react-native-paper";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";
import { payRequest } from "../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("some error");
      return;
    }
    payRequest(card.id, sum, name);
  };

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
            {cart.map(({ item, price }, index) => {
              return (
                <List.Item
                  key={index}
                  style={styles.listItem}
                  title={`${item} - ${price / 100}`}
                  titleStyle={styles.listItemTitle}
                />
              );
            })}
          </List.Section>
          <Text style={styles.totalText}>Total: {sum / 100}</Text>
        </View>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(n) => {
            setName(n);
          }}
          style={styles.customerName}
        />
        {name.length > 0 && (
          <CreditCardInput
            style={styles.creditCardInput}
            name={name}
            onSuccess={setCard}
          />
        )}
        <View style={styles.smallSpacer} />
        <Button
          icon="cash"
          mode="contained"
          onPress={onPay}
          style={styles.payButton}
          buttonColor="#4CAF50"
        >
          Pay
        </Button>
        <View style={styles.smallSpacer} />
        <Button
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
          style={styles.clearCartButton}
          buttonColor="#F44336"
        >
          Clear Cart
        </Button>
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
    marginTop: 5,
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
  smallSpacer: {
    height: 6,
  },
  textSpacer: {
    marginTop: 16,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
    input: {
      fontSize: 16,
      color: "#333",
    },
    label: {
      fontSize: 14,
      color: "#777",
    },
    inputContainer: {
      marginHorizontal: 16,
      marginTop: 10,
    },
  },
  customerName: {
    marginHorizontal: 16,
  },
  payButton: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    width: "40%",
    borderRadius: 5,
    alignSelf: "center",
  },
  clearCartButton: {
    marginHorizontal: 16,
    marginBottom: 20,
    width: "40%",
    borderRadius: 5,
    alignSelf: "center",
  },
});
