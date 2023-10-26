/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import { MD2Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const tabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 80,
  position: 'absolute',
  bottom: 20,
  right: 20,
  left: 20,
};

const AuthorizedNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focus) => (
            <Ionicons
              name={focus ? 'home' : 'home-outline'}
              color={focus ? MD2Colors.blue400 : MD2Colors.grey400}
              size={37}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: (focus) => (
            <Ionicons
              name={focus ? 'person' : 'person-outline'}
              color={focus ? MD2Colors.blue400 : MD2Colors.grey400}
              size={37}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthorizedNavigator;
