import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseGetFonts from "./hooks/useGetFonts";
import { useCallback } from "react";
import * as Splashscreen from 'expo-splash-screen'
import { Home, Profile } from './screens';

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator()

function App() {
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
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App