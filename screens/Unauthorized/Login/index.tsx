/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, KeyboardAvoidingView, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  IconButton,
  MD2Colors,
  TextInput,
} from "react-native-paper";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./styles";
import {
  HeightSpacer,
  ReuseableButton,
  ReuseableText,
} from "../../../components";
import { COLORS, SIZES } from "../../../constants/theme";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [loading, setLoading] = useState(false),
    [passwordVisibilty, setPasswordVisibility] = useState(true),
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
      <Image
        source={require("../../../assets/images/intro-bg.jpg")}
        style={style.image}
      />
      <KeyboardAvoidingView behavior="padding" style={style.textArea}>
        <ReuseableText
          text={"Sign up / Login"}
          family={"Raleway-Regular"}
          size={SIZES.xxLarge}
          color={MD2Colors.blue800}
          weight={700}
          align={"center"}
        />
        <HeightSpacer height={10} />
        <View style={style.accountButtonArea}>
          <IconButton
            style={style.iconButton}
            icon="google"
            mode="contained-tonal"
            iconColor={MD2Colors.blue600}
            size={20}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            style={style.iconButton}
            icon="apple"
            mode="contained-tonal"
            iconColor={MD2Colors.blue600}
            size={20}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <HeightSpacer height={20} />
        <ReuseableText
          text={"OR"}
          family={"Raleway-Regular"}
          size={SIZES.xLarge}
          color={MD2Colors.blue200}
          weight={700}
          align={"center"}
        />
        <HeightSpacer height={20} />
        <TextInput
          label="e-mail"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
          style={style.input}
        />
        <TextInput
          label="Password"
          value={password}
          autoCapitalize="none"
          secureTextEntry={passwordVisibilty}
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
          style={style.input}
          right={
            <TextInput.Icon
              icon={passwordVisibilty ? "eye" : "eye-off"}
              onPress={() => setPasswordVisibility((value) => !value)}
            />
          }
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
