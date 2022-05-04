import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ItemCard from "../components/ItemCard";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: "1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
export default ListingsScreen;
