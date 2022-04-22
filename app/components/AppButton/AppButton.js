import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

import colors from "../../config/colors";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
