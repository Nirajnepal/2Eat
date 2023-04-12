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
import {
  Avatar,
  List,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";
import { payRequest } from "../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      setError("Error: Card information is missing.");
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        setError(null);
        setSuccess("Payment was successful.");
        setTimeout(() => {
          clearSuccess();
          clearCart();
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Error: Payment was unsuccessful.");
        console.log(err);
      });
  };

  const clearError = () => {
    setError(null);
  };

  const clearSuccess = () => {
    setSuccess(null);
  };

  const onFocus = () => {
    clearError();
    clearSuccess();
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
      {isLoading && <ActivityIndicator />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {success && <Text style={styles.successText}>{success}</Text>}
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
          onFocus={onFocus}
          style={styles.customerName}
        />
        {name.length > 0 && (
          <CreditCardInput
            style={styles.creditCardInput}
            name={name}
            onSuccess={setCard}
            onFocus={onFocus}
          />
        )}
        <View style={styles.smallSpacer} />
        <Button
          disabled={isLoading}
          icon="cash"
          mode="contained"
          style={styles.payButton}
          buttonColor="#4CAF50"
          onPress={() => {
            clearError();
            clearSuccess();
            onPay();
          }}
        >
          Pay
        </Button>
        <View style={styles.smallSpacer} />
        <Button
          disabled={isLoading}
          icon="cart-off"
          mode="contained"
          style={styles.clearCartButton}
          buttonColor="#F44336"
          onPress={() => {
            clearError();
            clearSuccess();
            clearCart();
          }}
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
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  successText: {
    color: "green",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
