import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ItemCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.itemImage} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  itemImage: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ItemCard;
