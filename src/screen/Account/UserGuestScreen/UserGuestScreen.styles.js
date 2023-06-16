import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30,
    },
    description: {
        color: 'blue',
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 20,
    },
    image:{
        resizeMode: "contain",
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize:19,
        marginBottom:10,
        textAlign: "center",
        color:"#00a680",
    },
    btnStyle:{
        backgroundColor:"#00a680",

    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#EFF51B',
        opacity: 0.2, // Ajusta la opacidad del fondo
        position: 'relative',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
      },
});
