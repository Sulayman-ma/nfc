/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardScreen, Home, Profile, Subscription } from "../screens";
import { MD2Colors, MD3Colors } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../constants/theme";
const Tab = createBottomTabNavigator();

const tabBarStyle = {
  padding: 0,
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 20,
  right: 20,
  left: 20,
  backgroundColor: MD3Colors.neutral90,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "analysis") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "cards") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "subscription") {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={SIZES.xLarge}
              color={MD2Colors.blue600}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: tabBarStyle,
        }}
      />
      <Tab.Screen
        name="cards"
        component={CardScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarStyle: tabBarStyle,
        }}
      />
      <Tab.Screen
        name="analysis"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarStyle: tabBarStyle,
        }}
      />
      <Tab.Screen
        name="subscription"
        component={Subscription}
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarStyle: tabBarStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
