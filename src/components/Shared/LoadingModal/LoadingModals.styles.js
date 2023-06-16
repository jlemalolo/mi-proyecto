// hoja de estilos

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay:{
        height: 80,
        width: 100,
        backgroundColor: "#2eff11",
        borderColor: "#edff21",
        borderWidth: 2,
        borderRadius: 10,

    },
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text :{
        color:"#ff0000",
        textTransform: "uppercase",
        marginTop: 2,
    }

});