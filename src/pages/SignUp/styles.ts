import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 32,
        flex: 1
    },

    texts: {
        marginTop: 40
    },

    text1: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: '#32264C',
    },

    text2: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#6A6180',
        marginTop: 16
    },

    title: {
        marginTop: 130,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
    },

    input: {
        backgroundColor: '#FAFAFC',
        padding: 20,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#e6e6f0',
    },

    name: {
        marginTop: 24,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    lastName: {
        borderTopWidth: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    email: {
        marginTop: 24,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    password: {
        borderTopWidth: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    icon: {
        position: 'absolute',
        right: 15,
        top: 20
    },

    button: {
        marginTop: 15,
        backgroundColor: '#8257E5',
        padding: 20,
        borderRadius: 8
    },

    buttonDisable: {
        marginTop: 15,
        backgroundColor: '#DCDCE5',
        padding: 20,
        borderRadius: 8
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        textAlign: 'center',
    },

    buttonTextDisable: {
        color: '#9C98A6',
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        textAlign: 'center',
    },

    button2: {
        marginTop: 15,
        backgroundColor: '#04d361',
        padding: 20,
        borderRadius: 8
    },

})

export default styles