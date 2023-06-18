import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/TheTrendsaholicLogo.png")} />
        <Text style={styles.tagLine}>We make your shopping experience easy.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={"Login"} onPress={() => navigation.navigate('Login')} />
        <AppButton
          title={"Register"}
          color={"secondary"}
          onPress={() => navigation.navigate('Register')}
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
    width: "120%",
    height: "120%",
  },

  tagLine: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 25,
  },

  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    padding: 10,
  },
});
export default WelcomeScreen;
