import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default AppTextInput;
