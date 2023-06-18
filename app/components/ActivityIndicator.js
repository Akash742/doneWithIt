import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animation/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    overlay: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: 'absolute',
        opacity: 0.6,
        zIndex: 1
    }
})
export default ActivityIndicator;
