//import { StatusBar } from "expo-status-bar";
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
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListEditingScreen from "./app/screens/ListEditingScreen";

export default function App() {
  /*const handleOnPress = () => {
    console.log("Text Pressed!")
  }*/
  const { landscape } = useDeviceOrientation();

  const [textInput, setTextInput] = useState("");

  const [isNew, setIsNew] = useState(false);

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <ListEditingScreen />
    </Screen>
  );
}
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});*/

/*{

  <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        /*{
          borderWidth: 10,
          borderRadius: 10,
          borderTopWidth: 20,
          borderTopLeftRadius: 40,
          borderBottomRightRadius: 40,
          borderColor: 'royalblue' }*/

/*---{
          shadowOffset: { width: 10, height: 10},
          shadowOpacity: 1,
          shadowRadius: 10,   // IOS
          elevation: 20  //Android  } --//
          padding: 20,  //inside the
          paddingHorizontal: 10,
          paddingLeft: 30
        }}>
          <View style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}></View>
      </View>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
        
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
          margin: 20 // outside the container
        }}>
      </View>





      <Text style={{
        frontSize: 30,
        //fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: '600',
        color: 'gold',
        textTransform: 'capitalize',
        //textDecorationLine: 'line-through',
        textAlign: "justify",
        lineHeight: 30
      }}>
        I love React-Native!! 
        This is my first project. 
        Here I am Akash Dey.
      </Text>



       <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title={"Red Jacket for sale"}
        subTitle={"$100"}
        image={require("./app/assets/jacket.jpg")}
      />
    </View>


}*/
