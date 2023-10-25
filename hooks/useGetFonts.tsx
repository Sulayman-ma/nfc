import {useFonts} from 'expo-font'

const UseGetFonts = () => {
    const [fontLoaded,error] = useFonts({
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
      'Raleway-BoldItalic': require('./assets/fonts/Raleway-BoldItalic.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
      })
return [fontLoaded, error]
}

export default UseGetFonts