import React from "react";
import { View } from "react-native";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../services/checkout/checkout.service";

// pk_test_51Mu3KzC0cUuTlBdXjR9VYVRXJTVS6puyqhBMc6vfvukD6PuQUujvH4Xj0ekFt0sY5MUXTDWKLHcMit0cmN8Yqo8w00R775N3BB
export const CreditCardInput = ({ name = "", style, onSuccess }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (error) {
        console.log("Error getting card token:", error);
      }
    }
  };
  return (
    <View style={style.inputContainer}>
      <LiteCreditCardInput
        inputStyle={style.input}
        labelStyle={style.label}
        onChange={onChange}
      />
    </View>
  );
};
