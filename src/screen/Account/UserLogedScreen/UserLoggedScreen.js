import React from "react";
import { View, Text } from "react-native";
import { Image } from "@rneui/themed";
import { styles } from "./UserLoggedScreen.styles";

const UserLoggedScreen = () => {
  return (
    <View>
      
      <Text style={styles.text}>Te has registrado con éxito :3</Text>
    

      
      <Image
        source={require("../../../../assets/images/chayane.jpeg")}
        style={styles.image}
      />
    </View>
  );
};

export default UserLoggedScreen;
