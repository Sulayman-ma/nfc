import styles from './styles';
import React, { PropsWithoutRef } from 'react';
import {
  HeightSpacer,
  ReuseableButton,
  ReuseableText,
} from '../../../components';
import { COLORS, FONT, SIZES, TEXT } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

type HomeProp = PropsWithoutRef<{
  navigation: {
    navigate: any;
  };
}>;
const Home = ({ navigation }: HomeProp) => {
  const logOut = () => {
    FIREBASE_AUTH.signOut();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ReuseableText
        text={'Home to react native'}
        family={FONT.ralewayRegular}
        size={TEXT.large}
        color={COLORS.gray}
      />
      <HeightSpacer height={37} />
      <ReuseableButton
        onPress={() => navigation.navigate('profile')}
        btnText={'go to profile'}
        textColor={COLORS.white}
        width={(SIZES.width - 50) / 2.2}
        backgroundColor={COLORS.gray}
        borderWidth={0}
        borderColor={COLORS.secondary}
      />
      <HeightSpacer height={10} />
      <ReuseableButton
        onPress={logOut}
        btnText={'Log out'}
        textColor={COLORS.white}
        width={(SIZES.width - 50) / 2.2}
        backgroundColor={COLORS.gray}
        borderWidth={0}
        borderColor={COLORS.secondary}
      />
    </SafeAreaView>
  );
};

export default Home;
