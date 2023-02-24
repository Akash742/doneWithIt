import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listingData = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: "$1000",
    image: require("../assets/couch.jpg"),
  },
];
function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingData}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card title={item.title} subTitle={item.price} image={item.image} />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
  cardContainer: {
    marginHorizontal: 8,
    marginVertical: 5,
  },
});
export default ListingScreen;
