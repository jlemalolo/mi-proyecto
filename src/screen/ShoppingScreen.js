import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import { ListItem } from '@rneui/base';
import { styles } from './ListScreen/ListScreen.styles';

const ShoppingScreen=({newProducto})=> {
  const[product, setProductos] =useState([]);

  useEffect(()=>{
    if (newProducto != null) {
      setProductos([...product, newProducto]);
    }
  }, [newProducto]);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Información de Productos a pagar</Text>
    <Text style={styles.subtitle}>Lista de productos a pagar:</Text>
    {product.map((producto) => (
      <View key={producto.id} style={styles.productoContainer}>
        <Image source={producto.imagen} style={styles.productoImagen} />
        <View style={styles.productoInfo}>
          <Text style={styles.nombre}>Nombre: {producto.nombre}</Text>
          <Text style={styles.precio}>Precio: ${producto.precio}</Text>
        </View>
      </View>
    ))}
  </View>
  );
};

export default ShoppingScreen;