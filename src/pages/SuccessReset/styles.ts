import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#8257E5',
    },

    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },

    text1: {
        marginTop: 20,
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        color: '#FFF',
        textAlign: 'center'
    },

    text2: {
        fontSize: 14,
        marginTop: 16,
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center'
    },

    success: {
        position: 'absolute'
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        textAlign: 'center',
    },

    button: {
        marginTop: 15,
        backgroundColor: '#04d361',
        padding: 20,
        borderRadius: 8
    },
})

export default styles