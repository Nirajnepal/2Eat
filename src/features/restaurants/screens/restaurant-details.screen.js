import React, { useState, useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
} from "react-native";
import { List } from "react-native-paper";
import { CartContext } from "../../services/cart/cart.context";
import { Button } from "react-native-paper";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView style={styles.scrollView}>
        <List.Accordion
          title="Breakfast"
          titleStyle={styles.title}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Eggs Benedict" style={styles.item} />
          <List.Item title="Classic Breakfast" style={styles.item} />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          titleStyle={styles.title}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Burger w/ Fries" style={styles.item} />
          <List.Item title="Steak Sandwich" style={styles.item} />
          <List.Item title="Mushroom Soup" style={styles.item} />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          titleStyle={styles.title}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Spaghetti Bolognese" style={styles.item} />
          <List.Item
            title="Veal Cutlet with Chicken Mushroom Rotini"
            style={styles.item}
          />
          <List.Item title="Steak Frites" style={styles.item} />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          titleStyle={styles.title}
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Coffee" style={styles.item} />
          <List.Item title="Tea" style={styles.item} />
          <List.Item title="Modelo" style={styles.item} />

          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
      <View style={styles.spacer}>
        <Button
          icon="cash"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 999 }, restaurant);
            navigation.navigate("Checkout");
          }}
          style={styles.orderButton}
        >
          Order Special only for $9.99
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff" /* change the background color */,
    paddingHorizontal: 20 /* add some horizontal padding */,
    paddingTop: 10 /* add some top padding */,
  },
  accordion: {
    backgroundColor: "#eee" /* change the accordion background color */,
    marginBottom: 10 /* add some bottom margin */,
  },
  item: {
    paddingLeft: 60 /* add some left padding for the list items */,
  },
  title: {
    fontSize: 18 /* increase the font size of the accordion titles */,
  },
  spacer: {
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: "#696AC3",
    padding: 2,
    color: "white",
    borderRadius: 0,
  },
});
