import {Text, View} from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState(''),
      [password, setPassword] = useState(''),
      [loading, setLoading] = useState(false),
      auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
    }
    catch(error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
 }
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
