import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import { MD2Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

// const tabBarStyle = {
//   padding: 20,
//   borderRadius: 20,
//   height: 80,
//   position: 'absolute',
//   bottom: 20,
//   right: 20,
//   left: 20,
// };

const AuthorizedNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focus) => (
            <Ionicons
              name={focus ? 'home' : 'home-outline'}
              color={focus ? MD2Colors.blue400 : MD2Colors.grey400}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focus) => (
            <Ionicons
              name={focus ? 'person' : 'person-outline'}
              color={focus ? MD2Colors.blue400 : MD2Colors.grey400}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthorizedNavigator;
