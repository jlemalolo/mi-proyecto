import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
      },
      productoContainer: {
        marginBottom: 16
      },
      nombre: {
        fontSize: 16,
        marginBottom: 4
      },
      precio: {
        fontSize: 14,
        marginBottom: 4
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      cantidad: {
        fontSize: 14,
        marginBottom: 4,
        marginHorizontal: 8
      },
      quantityButton: {
        fontSize: 16,
        color: 'green',
        marginHorizontal: 4
      },
      contador: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
      },
      precioTotal: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      button: {
        fontSize: 14,
        color: 'green',
        marginBottom: 4,
        fontWeight: "bold"
      },
      imagenProducto: {
        width: 80, // ajusta el ancho de la imagen según tus necesidades
        height: 80, // ajusta la altura de la imagen según tus necesidades
        resizeMode: 'stretch', // ajusta el modo de ajuste de la imagen según tus necesidades
        marginBottom: 5, // ajusta el margen inferior de la imagen según tus necesidades
      },
    });
