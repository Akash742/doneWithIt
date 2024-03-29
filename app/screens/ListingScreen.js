import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request()} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Card
                title={item.title}
                subTitle={item.price}
                imageUrl={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            </View>
          )}
        />
      </Screen>
    </>
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
