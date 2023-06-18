import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const auth = useAuth();
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator
        visible={registerApi.loading || loginApi.loading}
      />
      <Screen style={styles.container}>
        <ErrorMessage error={"User already exist."} visible={error} />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon={"account"}
            placeholder="Name"
            autoCorrect={false}
            name="name"
          />
          <AppFormField
            icon={"email"}
            placeholder="email"
            autoCapitalise="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <AppFormField
            icon={"lock"}
            placeholder="Password"
            secureTextEntry
            autoCapitalise="none"
            autoCorrect={false}
            textContentType="password"
            name="password"
          />
          <SubmitButton title={"Register"} />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegisterScreen;
