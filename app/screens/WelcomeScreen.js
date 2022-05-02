import React from "react";
import { ImageBackground, Image, StyleSheet, View, Text } from "react-native";

import AppButton from "../components/AppButton";

import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.taglineText}>Sell What you Don't Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="login"
          onPress={() => console.log("tapped")}
          color="primary"
        />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  taglineText: {
    fontSize: 18,
    fontWeight: "500",
  },
  btnContainer: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
