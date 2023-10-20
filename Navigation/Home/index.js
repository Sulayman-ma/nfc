import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import { useCallback } from 'react';
import * as Splashscreen from 'expo-splash-screen'
import styles from './styles';
const Home= ()=>  {
  const [fontLoaded,error] = useFonts({
    ralewayRegular: require('../../assets/fonts/Raleway-Regular.ttf'),
    ralewayBold: require('../../assets/fonts/Raleway-Bold.ttf'),
    ralewayExtraBold: require('../../assets/fonts/Raleway-ExtraBold.ttf'),
    ralewayExtraLight: require('../../assets/fonts/Raleway-ExtraLight.ttf'),
    ralewaySemiBold: require('../../assets/fonts/Raleway-SemiBold.ttf'),
  })

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
      <Text style={styles.textStyle}>ome to react native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home

