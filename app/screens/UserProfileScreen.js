import React from "react";
import { StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function UserProfileScreen({ route, navigation }) {
  const { user } = route.params;
  console.log(user);

  const handleClick = () => {
    navigation.navigate( routes.PROFILE_PIC);
  }

  return (
    <Screen>
        <TouchableWithoutFeedback onPress={() => handleClick() }>
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              tint="light"
              resizeMode="cover"
              source={require("../assets/Akash.jpg")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.detailContainer}>
            <View style={styles.nameContainer}>
                <AppText style={styles.name}>{user.name}</AppText>
            </View>
            <View style={styles.emailContainer}>
                <AppText>Email- </AppText>
                <AppText style={styles.emailId}>{user.email}</AppText>
            </View>
            <View style={styles.mobileNumContainer}>
                <AppText>Mobile No.- </AppText>
                <AppText style={styles.mobileNum}>8910245637</AppText>
            </View>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colors.primary,
        overflow: "hidden",
        marginBottom: 0,
        paddingBottom: 0,
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      detailContainer: {
        padding: 20,
      },
      nameContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
      },
      emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mobileNumContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      name: {
        fontSize: 26,
        fontWeight: "bold",
      },
      emailId: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
      },
      mobileNum: {
        color: "#72bcd4",
        fontWeight: "bold",
        fontSize: 20,
      },
});

export default UserProfileScreen;
