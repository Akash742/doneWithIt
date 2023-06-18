import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { ErrorMessage, AppForm, AppFormField, SubmitButton } from "../components/forms";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async({email, password}) => {
    const result = await authApi.login(email, password)
    if(!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result.data)

  }
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title={"Submit"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
