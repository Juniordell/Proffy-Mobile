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
        paddingVertical: 50
    },

    headerMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textLogin: {
        fontSize: 24,
        color: '#32264D',
        fontFamily: 'Poppins_600SemiBold'
    },

    textSignIn: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#8257E5'
    },

    input: {
        backgroundColor: '#FAFAFC',
        padding: 20,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#e6e6f0',
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

    label: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    labelCheck: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    button: {
        marginTop: 15,
        backgroundColor: '#04d361',
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

    forgot: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12
    },

})

export default styles