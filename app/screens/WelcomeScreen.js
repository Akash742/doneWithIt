import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={"Login"} onPress={() => console.log("Login")} />
        <AppButton
          title={"Register"}
          color={"secondary"}
          onPress={() => console.log("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },

  tagLine: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 7,
  },

  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    padding: 10,
  },
});
export default WelcomeScreen;
