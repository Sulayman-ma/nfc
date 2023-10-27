/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./styles";
import { HeightSpacer, ReuseableButton } from "../../../components";
import { COLORS, SIZES } from "../../../constants/theme";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [loading, setLoading] = useState(false),
    auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(response);
      alert("check your emails");
    } catch (error) {
      console.log(error);
      alert("creating account failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
          style={style.input}
        />
        <TextInput
          value={password}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
          style={style.input}
        />
        <HeightSpacer height={10} />
        {loading ? (
          <ActivityIndicator
            animating={true}
            color={MD2Colors.blueGrey100}
            size={"large"}
          />
        ) : (
          <>
            <ReuseableButton
              btnText={"Login"}
              onPress={signIn}
              textColor={COLORS.white}
              width={(SIZES.width - 50) / 2}
              backgroundColor={COLORS.black}
              borderWidth={0}
              borderColor={COLORS.black}
            />
            <HeightSpacer height={10} />
            <ReuseableButton
              onPress={createAccount}
              btnText={"create Account"}
              textColor={COLORS.white}
              width={(SIZES.width - 50) / 2}
              backgroundColor={COLORS.black}
              borderWidth={0}
              borderColor={COLORS.black}
            />
            <HeightSpacer height={10} />
            <ReuseableButton
              onPress={() => navigation.navigate("welcome")}
              btnText={"back"}
              textColor={COLORS.white}
              width={(SIZES.width - 50) / 2}
              backgroundColor={COLORS.black}
              borderWidth={0}
              borderColor={COLORS.black}
            />
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
