import React, { useState } from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  AppFormImagePicker,
} from "../components/forms";

import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings"
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "pink", icon: "floor-lamp" },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  { label: "Clothing", value: 3, backgroundColor: "purple", icon: "shoe-heel" },
  { label: "Camera", value: 4, backgroundColor: "yellow", icon: "camera" },
  { label: "Games", value: 5, backgroundColor: "green", icon: "cards" },
  { label: "Sports", value: 6, backgroundColor: "blue", icon: "basketball" },
];

function ListEditingScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async(listing, {resetForm}) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing({...listing, location},
      (progress) => setProgress(progress)
      );

      if(!result.ok)
      {
        console.log(result.problem)
        setUploadVisible(false);
        return alert("Couldn't save the listings.");
      }

      resetForm();
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField name={"title"} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          width={"30%"}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          width="40%"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListEditingScreen;
