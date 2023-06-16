import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 175,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  productoContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  productoImagen: {
    width: 50,
    height: 50,
    marginRight: 50,
  },
  productoInfo: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  precio: {
    fontSize: 14,
  },
  btnStyle: {
    backgroundColor: "blue",
    width: 200,
    height: 80,
    marginTop: 20,
  },
});
