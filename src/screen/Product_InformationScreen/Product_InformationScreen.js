import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName';
import { styles } from "./Product_InformationScreen.styles";

const Product_InformationScreen = () => {
  const navigation = useNavigation();

  // Información de los productos
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Manzanas',
      precio: 0.25,
      cantidad: 0,
      imagen: require("../../../assets/images/manzana.png"),
    },
    {
      id: 2,
      nombre: 'Peras',
      precio: 0.25,
      cantidad: 0,
      imagen: require("../../../assets/images/pera.png"),
    },
    {
      id: 3,
      nombre: 'Sandias',
      precio: 0.50,
      cantidad: 0,
      imagen: require("../../../assets/images/sandia.png"),
    },
  ]);

  const [contador, setContador] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const AgregarAlCarrito = (producto) => {
    producto.cantidad += 1;
    setContador(contador + 1);
    setPrecioTotal(precioTotal + producto.precio);
    setProductos([...productos]);
  };
  const calcularPrecioTotalConIVA = () => {
    const precioSinIVA = precioTotal;
    const IVA = precioSinIVA * 0.12; 
    return precioSinIVA + IVA;
  };

  const QuitarDelCarrito = (producto) => {
    if (producto.cantidad > 0) {
      producto.cantidad -= 1;
      setContador(contador - 1);
      setPrecioTotal(precioTotal - producto.precio);
      setProductos([...productos]);
    }
  };


const IrAlCarrito = () => {
  const productosEnCarrito = productos.filter((producto) => producto.cantidad > 0);
  navigation.navigate(screen.shopping, { screen: screen.shopping.shopping, params: { productosEnCarrito } });
};



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estamos en la Screen de Información de Productos</Text>

      {productos.map((producto) => (
        <View key={producto.id} style={styles.productoContainer}>
          <Image source={producto.imagen} style={styles.imagenProducto} />
          <Text style={styles.nombre}>Nombre: {producto.nombre}</Text>
          <Text style={styles.precio}>Precio: ${producto.precio}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => QuitarDelCarrito(producto)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.cantidad}>Cantidad: {producto.cantidad}</Text>
            <TouchableOpacity onPress={() => AgregarAlCarrito(producto)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <Text style={styles.contador}>Total de productos en el carrito: {contador}</Text>
      <Text style={styles.precioTotal}>Precio total: ${precioTotal}</Text>
      <Text style={styles.precioTotal}>Precio total con IVA: ${calcularPrecioTotalConIVA()}</Text>
      

      <TouchableOpacity onPress={IrAlCarrito}>
        <Text style={styles.button}>Ir al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product_InformationScreen;


