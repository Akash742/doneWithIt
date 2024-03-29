import React,  {useEffect} from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker';


import colors from "../config/colors";


function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert("You need to enable the permission to access the library.");
  };

const handlePress = () => {
    if(!imageUri) selectedImage();
    else
    Alert.alert('Delete', 'Are sure you want to delete this image?', [
        {text: 'Yes', onPress : () => onChangeImage(imageUri)},
        {text: 'No'}
    ])
}
  const selectedImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         quality: 0.5,
      })

      if(!result.canceled) onChangeImage(result.assets[0].uri)
    } catch (error) {
      console.log("Error reading an image", error)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
