import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import {ReuseableButton} from '../../components';
import {COLORS, SIZES} from '../../constants/theme';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home to react native</Text>
      <ReuseableButton
        onPress={() => navigation.navigate('profile')}
        btnText={'go to profile'}
        textColor={COLORS.white}
        width={SIZES.xxLarge}
        backgroundColor={COLORS.gray2}
        borderWidth={SIZES.small}
        borderColor={COLORS.secondary}
      />
    </View>
  );
};

export default Home;
