import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: 375,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257E5'
    },

    bgHeader: {
        position: 'absolute',
        width: 238.66,
        height: 266.21
    },

    logo: {
        width: 160,
        height: 80
    },

    main: {
        paddingHorizontal: 32,
        paddingTop: 20
    },

    headerMain: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    text: {
        fontSize: 24,
        color: '#32264D',
        fontFamily: 'Poppins_600SemiBold'
    },

    subtext: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#6A6180',
        marginTop: 16
    },
    
    email: {
        backgroundColor: '#FAFAFC',
        padding: 20,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#e6e6f0',
        marginTop: 40,
        borderRadius: 8
    },

    button: {
        marginTop: 24,
        backgroundColor: '#04d361',
        padding: 20,
        borderRadius: 8
    },

    buttonDisable: {
        marginTop: 24,
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

})

export default styles