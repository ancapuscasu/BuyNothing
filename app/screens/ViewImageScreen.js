import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeBtn}
        name="close"
        size={24}
        color="black"
      />
      <MaterialCommunityIcons
        style={styles.deleteBtn}
        name="delete"
        size={24}
        color="black"
      />
      <Image
        style={styles.itemImage}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    left: 30,
  },
  deleteBtn: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
});
