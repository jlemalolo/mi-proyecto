import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from 'formik';
import { styles } from './RegisterForm.styles';
import { initialValues } from './RegisterForm.data';
import { validationSchema } from './RegisterForm.data';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName';
import Toast from "react-native-toast-message";

const RegisterForm = () => {
    const navigation= useNavigation();

    //hook useState
    const [showPassword, setShowPassword] = useState(false);
    const formik=useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            // console.log("Formulario");
            // console.group(formValue);
            try{
              const auth=getAuth();
             await createUserWithEmailAndPassword(
                auth,
                formValue.email,
                formValue.password
             ); 
             navigation.navigate(screen.account.account); 
            }catch(error){
            //console.log(error);
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Error al registrarse",
            })
            }
        },
    });

    const showHiddenPassword=()=>{
        setShowPassword(!showPassword);
    };

  return (
    <View style={styles.conten}>

      <Input placeholder="Correo Electronico" containerStyle={styles.input} 
      rightIcon={
      <Icon type='material-community' name="at"
       iconStyle={styles.icon}/>} 
      onChangeText={(text)=>formik.setFieldValue("email", text)}
      errorMessage={formik.errors.email}
      /> 
      <Input placeholder="Contraseña"
       containerStyle={styles.password} 
       secureTextEntry={showPassword ? false : true}
      rightIcon={
      <Icon type='material-community' 
      name={showPassword ? "eye-off-outline" : "eye-outline"} 
      iconStyle={styles.iconPs}
      onPress={showHiddenPassword}/>} 
      onChangeText={(text)=>formik.setFieldValue("password", text)}
      errorMessage={formik.errors.password}
      /> 
      <Input placeholder="Confirmar Contraseña"
       containerStyle={styles.password} 
       secureTextEntry={showPassword ? false : true}
      rightIcon={
      <Icon type='material-community' 
      name= {showPassword ? "eye-off-outline" : "eye-outline"} 
      iconStyle={styles.iconPs}
      onPress={showHiddenPassword}/>} 
      onChangeText={(text)=>formik.setFieldValue("confirmPassword", text)}
      errorMessage={formik.errors.confirmPassword}
      /> 
      <Button title="Unirse" 
      containerStyle={styles.btnContainer}
      buttonStyle={styles.btnRegister}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      />
    </View>
  );
};

export default RegisterForm;

// placeholder = texto que luego se elimina
//secureTextEntry = encripta texto 
//useFormik = hook
//initialValues = valor inicial del imput
//validateOnChange = valida el formulario solo cuando acaba de escribir
//try/catch
//try = ejecuta si todo esta bien
//catch = se ejecuta si el try genera un problema como ejm que ya existe usuario repetido
//async = el resto del codigo se ejecuta saltadose lo que este marcado 