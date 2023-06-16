import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './RegisterScreen.styles';
import { Image } from '@rneui/base';
import RegisterForm from '../../../components/Auth/RegisterForm/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen=()=> {
  return (
    <KeyboardAwareScrollView>
      <Image
      source={require("../../../../assets/images/REGISTRARSE.png")}
      style={styles.image}
      />
      <View style={styles.conten}>
      <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;