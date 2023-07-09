import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function UserProfileScreen({ route, navigation }) {
  const { user } = route.params;
  console.log(user);

  const handleClick = () => {
    navigation.navigate(routes.PROFILE_PIC);
  };

  return (
    <Screen>
      <View style={styles.shadow}>
        <TouchableWithoutFeedback onPress={() => handleClick()}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              tint="light"
              resizeMode="cover"
              source={require("../assets/Akash.jpg")}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.nameContainer}>
          <AppText style={styles.name}>{user.name}</AppText>
        </View>
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons name="email" size={30} color="grey" style={styles.space}/>
          <AppText>Email- </AppText>
          <AppText style={styles.emailId}>{user.email}</AppText>
        </View>
        <View style={styles.mobileNumContainer}>
          <MaterialCommunityIcons name="phone" size={30} color="grey" style={styles.space}/>
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
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    overflow: "hidden",
    marginBottom: 0,
    paddingBottom: 0,
    elevation: 20,
  },
  shadow: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOpacity: 2.0,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  detailContainer: {
    paddingTop: 20,
    marginLeft: 8,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  space: {
    marginRight: 4,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  mobileNumContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
