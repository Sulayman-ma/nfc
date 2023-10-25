import {useFonts} from 'expo-font'
import font from '../assets/'
const UseGetFonts = () => {
    const [fontLoaded,error] = useFonts({
        ralewayRegular: require('../assets/fonts/Raleway-Regular.ttf'),
        ralewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
        ralewayExtraBold: require('../assets/fonts/Raleway-ExtraBold.ttf'),
        ralewayExtraLight: require('../assets/fonts/Raleway-ExtraLight.ttf'),
        ralewaySemiBold: require('../assets/fonts/Raleway-SemiBold.ttf'),
      })
return [fontLoaded, error]
}

export default UseGetFonts