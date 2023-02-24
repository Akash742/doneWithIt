import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontFamily: "Roboto",
    fontSize: 25,
  },
});
export default AppText;