import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen({ route }) {
  const { imageUrl } = route.params;
  console.log(route)

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: imageUrl }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;
