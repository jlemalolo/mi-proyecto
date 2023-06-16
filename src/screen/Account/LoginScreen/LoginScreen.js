import React from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from './LoginScreen.styles';
import {Text, Image, Button} from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName';
import LoginForm from '../../../components/Auth/LoginForm/LoginForm';

const LoginScreen=()=> {
  const navigation=useNavigation();
  const goToRegister=()=>{
    navigation.navigate(screen.account.register)
  };
  return (
    <ScrollView>
      <Image
      source={require("../../../../assets/images/inicio.png")}
      style={styles.image}
      />
      <View style={styles.cont}>
      <LoginForm/>
      <Text style={styles.textRegister}>
        ¿Aún no tienes una cuena?{" "}
        <Text style={styles.btnRegister} onPress={goToRegister}> Regístrate </Text>
       </Text>   
       </View>
    </ScrollView>
  );
};

export default LoginScreen;