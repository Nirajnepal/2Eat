import React, { useContext } from "react";

import { List, Avatar } from "react-native-paper";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={160} icon="account" backgroundColor="#2182BD" />
        <Text style={styles.userName}>{user.email}</Text>
      </View>
      <List.Section>
        <List.Item
          style={styles.listItem}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={styles.listItem}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  userName: {
    fontSize: 14,
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  listItem: {
    padding: 16,
    marginTop: 10,
  },
});
