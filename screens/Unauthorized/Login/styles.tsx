import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

const style = StyleSheet.create({
    container:{
        display: 'flex',
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor: COLORS.beige,
        height: SIZES.height,
        width: SIZES.width
    },
    input:{
        marginLeft:20,
        width:SIZES.width/2,
        borderRadius: 5,
        height:SIZES.xxLarge,
        backgroundColor: COLORS.blanchedalmond,
        marginVertical: 10,
        justifyContent:'center'
    }
});

export default style;
