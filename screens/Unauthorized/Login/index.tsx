import {ActivityIndicator, GestureResponderEvent, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './styles';
import { HeightSpacer, ReuseableButton } from '../../../components';
import { COLORS, SIZES } from '../../../constants/theme';

const Login = () => {
  const [email, setEmail] = useState(''),
      [password, setPassword] = useState(''),
      [loading, setLoading] = useState(false),
      auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    }
    catch(error) {
      console.log(error)
      alert('sign in failed: '+ error.message)
    }
    finally {
      setLoading(false)
    }
 }

 const createAccount =async () => {
  setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
      alert('check your emails')
    }
    catch(error) {
      console.log(error)
      alert('sign in failed: '+ error.message)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <SafeAreaView style={style.container}>
      <TextInput  value={email} autoCapitalize='none' onChangeText={(text) => setEmail(text)} placeholder='email' style={style.input}/>
      <TextInput  value={password} autoCapitalize='none' secureTextEntry={true} onChangeText={(text) => setPassword(text)} placeholder='password' style={style.input}/>
      <HeightSpacer height={10}/>
      {loading ? <ActivityIndicator size={SIZES.large} color={COLORS.black} />  
      :<View style={{width:100, }}>
        <ReuseableButton 
        btnText={'Login'} onPress={signIn} textColor={COLORS.white} width={(SIZES.width-50)/2} backgroundColor={COLORS.black} borderWidth={0} borderColor={COLORS.black}        
      />
      <HeightSpacer height={10}/>
      <ReuseableButton onPress={createAccount} btnText={'create Account'} textColor={COLORS.white} width={(SIZES.width-50)/2} backgroundColor={COLORS.black} borderWidth={0} borderColor={COLORS.black}        
      />
      </View>}
    </SafeAreaView>
  );
};

export default Login;
