import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

function ListingDetailsScreen({route, navigation}) {
  const listing = route.params;
  const { user } = useAuth();

  const handleClick = (imageUrl) => {
    navigation.navigate( routes.LISTING_VIEWIMAGE, { imageUrl });
  }

  const handleUser = (user) => {
    navigation.navigate(routes.USER, { user });
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "android" ? 0 : 100}
    >
      <TouchableWithoutFeedback key={listing.id} onPress={() => handleClick(listing.images[0].url)}>
        <View style={styles.img}>
          <Image style={styles.img} preview={{uri: listing.images[0].thumbnailUrl}} tint="light" uri={listing.images[0].url} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/Akash.jpg")}
              title= { user.name }
              subTitle="6 Listings"
              onPress={() => handleUser(user)}
            />
          </View> 
        <ContactSellerForm listing={listing}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListingDetailsScreen;
