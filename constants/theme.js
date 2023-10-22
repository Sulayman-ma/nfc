import { Dimensions } from "react-native";
const {height, width} = Dimensions.get('window')

const COLORS = {

}

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
}

const TEXT = {
    xxSmall: 11,
    xSmall: 13,
    small: 15,
    medium: 17,
    large: 21,
    xLarge: 22,
    xxLarge: 32,
}

const SHADOWS = {
    small: {
         
    }
}

export { SHADOWS,SIZES, TEXT, COLORS}