import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function UserProfileScreen({ route }) {
  const { user } = route.params;
  console.log(user);

  return (
    <Screen>
        <Image
          style={styles.img}
          tint="light"
          source={require("../assets/Akash.jpg")}
        />
        <View style={styles.detailContainer}>
            <View style={styles.nameContainer}>
                <AppText>Name- </AppText>
                <AppText style={styles.name}>{user.name}</AppText>
            </View>
            <View style={styles.emailContainer}>
                <AppText>Email- </AppText>
                <AppText style={styles.emailId}>{user.email}</AppText>
            </View>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    img: {
        flex: 0.75,
        width: "100%",
        marginBottom: 0,
        paddingBottom: 0,
      },
      detailContainer: {
        padding: 20,
      },
      nameContainer: {
        flexDirection: "row",
      },
      emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
      },
      name: {
        fontSize: 24,
        fontWeight: "bold",
      },
      emailId: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
      },
});

export default UserProfileScreen;
