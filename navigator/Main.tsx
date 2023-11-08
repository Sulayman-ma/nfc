import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Description,
  Introductory,
  Login,
  TrendingItem,
  TrendingList,
  Upcoming,
} from "../screens";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { BottomTabNavigator } from "../navigator";

const Stack = createNativeStackNavigator();

const Main = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <>
            <Stack.Screen name="tab-screen" component={BottomTabNavigator} />
            <Stack.Screen name="upcoming" component={Upcoming} />
            <Stack.Screen
              name="description"
              component={Description}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="trending" component={TrendingList} />
            <Stack.Screen name="trending/item" component={TrendingItem} />
          </>
        ) : (
          <>
            <Stack.Screen name="welcome" component={Introductory} />
            <Stack.Screen name="login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
