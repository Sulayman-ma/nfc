import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';
import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import AuthorizedNavigator from './AuthorizedNavigator';

const Stack = createNativeStackNavigator();

const Main = (prop: MainProp) => {
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
          <Stack.Screen name="authorized" component={AuthorizedNavigator} />
        ) : (
          <Stack.Screen name="unauthorized" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

interface MainProp {
  onLayout: (event: LayoutChangeEvent) => void;
}
