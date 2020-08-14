import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    first: {
        backgroundColor:'#8257E5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 310
    },

    second: {
        backgroundColor:'#04D361',
        justifyContent: 'center',
        alignItems: 'center',
        height: 310
    },

    backgroundImage: {
        width:235,
        height:248,
        alignItems:'center',
        justifyContent:'center',
    },

    main: {
        paddingHorizontal: 40
    },

    text: {
        marginTop: 51
    },

    number: {
        marginBottom: 20,
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        color: '#6A6180',
        opacity: 0.16
    },

    phrase: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#6A6180'
    },

    arrow: {
        width: 50,
        position: 'absolute',
        bottom: 45,
        right: 45
    },

    arrowButton: {
        marginTop: 50,
        marginLeft: 270
    }
})

export default styles