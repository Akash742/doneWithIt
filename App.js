//import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Platform,
  StatusBar,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";
import AppLoading from "expo-app-loading";


import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";


const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);
export default function App() {
  NetInfo.addEventListener((netInfo) => console.log(netInfo));

  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

const restoreUser = async() => {
  const user = await authStorage.getUser();
  if(user) return setUser(user);
};

useEffect(() => {
  restoreUser()
}, []);

/*if(!isReady)
return (<AppLoading startAsync={this.restoreToken} onFinish={() => this.setIsReady(true)}/>)*/

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        { user ? <AppNavigator/> : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

/*

          /*const requestPermission = async() => {
            const { granted } = await ImagePicker.requestCameraPermissionsAsync();
            if(! granted) alert('You need to enable the permission to access the library.')
          }
          
          useEffect(() => {
            requestPermission()
          }, [])
          
          const selectedImage = async () => {
            try {
              const result = await ImagePicker.launchImageLibraryAsync();
              if(!result.canceled) setImageUri(result.assets[0].uri);
            } catch (error) {
              console.log("Error reading an image", error)
            }
          }



          <Screen>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Screen>
          
        }*/
