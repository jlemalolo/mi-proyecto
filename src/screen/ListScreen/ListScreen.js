import React from "react";
import { View, Image } from "react-native";
import { Text, Button } from "@rneui/themed";
import { styles } from "./ListScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/ScreenName";

const ListScreen = () => {
  const navigation = useNavigation();
  const goToProduct = () => {
    navigation.navigate(screen.product.product);
  };
  const listaProductos = [
    {
      id: 1,
      nombre: "Manzanas",
      precio: 0.25,
      imagen: require("../../../assets/images/manzana.png"),
    },
    {
      id: 2,
      nombre: "Peras",
      precio: 0.25,
      imagen: require("../../../assets/images/pera.png"),
    },
    {
      id: 3,
      nombre: "Sandias",
      precio: 0.50,
      imagen: require("../../../assets/images/sandia.png"),
    },
   
    
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/tienda.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Información de Productos</Text>
      <Text style={styles.subtitle}>Lista de productos:</Text>
      {listaProductos.map((producto) => (
        <View key={producto.id} style={styles.productoContainer}>
          <Image source={producto.imagen} style={styles.productoImagen} />
          <View style={styles.productoInfo}>
            <Text style={styles.nombre}>Nombre: {producto.nombre}</Text>
            <Text style={styles.precio}>Precio: ${producto.precio}</Text>
            
          </View>
        </View>
      ))}
      <Button
        title="Informacion de productos"
        onPress={goToProduct}
        buttonStyle={styles.btnStyle}
      />
    </View>
  );
};

export default ListScreen;

