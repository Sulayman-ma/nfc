import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import { useCallback } from 'react';
import * as Splashscreen from 'expo-splash-screen'
import UseGetFonts from '../../Hooks/useGetFonts';
import styles from './styles';

const Profile= ()=>  {
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
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile Page</Text>
      <StatusBar style="light" />
    </View>
  );
}

export default Profile
