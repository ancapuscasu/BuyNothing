import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";
import ListItemSeparator from "../components/ListItemSeparator";

const account = {
  image: require("../assets/headshot.png"),
  name: "Anca Puscasu",
  email: "ancapuscasu@ymail.com",
};

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function MyAccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={account.name}
          subTitle={account.email}
          image={account.image}
          style={styles.userDetails}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
  },
  container: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
});
export default MyAccountScreen;
