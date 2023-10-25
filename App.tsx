import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseGetFonts from "./hooks/useGetFonts";
import { useCallback } from "react";
import * as Splashscreen from 'expo-splash-screen'
import { Home, Login, Profile } from './screens';
import { PaperProvider } from 'react-native-paper';
import { Main } from './navigator';

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
    <PaperProvider>
      <Main/>
    </PaperProvider>
  )
}

export default App