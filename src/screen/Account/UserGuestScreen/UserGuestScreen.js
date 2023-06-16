import React from 'react';
import {View, ScrollView } from 'react-native';
import {Text, Button, Image} from "@rneui/themed";
import {styles} from "./UserGuestScreen.styles";
import {screen} from "../../../utils/ScreenName";
import { useNavigation } from '@react-navigation/native';

 const UserGuestScreen=()=> {
  const navigation=useNavigation();
  const goToLogin=()=>{
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView contentContainerStyle={{flex:1, justifyContent:"center" }} style={styles.viewBody}>
      <Text style={styles.description}>
      Di ¿Cuáles serian tus mejores recomendaciones para que la gente conozca mucho mas nuestra tienda? </Text>
      <Image
      source={require("../../../../assets/images/bienvenidos.png")}
      style={styles.image}
      />
       <View style={styles.background} />
      <Text style={styles.title}>Consultar tu perfil de la tienda</Text>
      <Button title="Ver tu perfil" 
      onPress={goToLogin} 
      buttonStyle={styles.btnStyle}/>      
    </ScrollView>
  );
};

export default UserGuestScreen;