import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from "react";
import * as Splashscreen from 'expo-splash-screen'
import { Home, Login, Profile } from '../screens';
import React from 'react'
import UseGetFonts from '../hooks/useGetFonts';


const Stack = createNativeStackNavigator()

const Main = () => {
    const [fontLoaded,error] = UseGetFonts()

  const onLayoutRootView = useCallback(async() => {
    if(fontLoaded){
      await Splashscreen.hideAsync()
    }
  },[fontLoaded, error])

  if(!fontLoaded || error){
    return null
  } 
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main