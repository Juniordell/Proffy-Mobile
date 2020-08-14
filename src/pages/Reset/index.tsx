import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import backgroundImage from '../../assets/images/Background.png'
import intro from '../../assets/images/Intro.png'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

const SignIn: React.FC = () => {

    const { navigate } = useNavigation()

    const [ enable, setEnable ] = useState(false)
    const [ email, setEmail ] = useState('')

    useEffect(() => {
        if ( email.includes('@') ) {
            setEnable(true)
        }

        if ( !(email.includes('@')) ) {
            setEnable(false)
        }

    }, [email])

    function sendReset() {
        navigate('SuccessReset')
    }

    function backToSignIn() {
        navigate('SignIn')
    }

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.bgHeader} resizeMode='contain' source={backgroundImage} />
                <Image style={styles.logo} resizeMode="contain" source={intro} />
            </View>
            
            <View style={styles.main}>

                <TouchableOpacity onPress={backToSignIn} style={{marginBottom: 25}}>
                    <Ionicons name="ios-arrow-round-back" size={30} color="#9C98A6" />
                </TouchableOpacity>

                <View style={styles.headerMain}>
                    <Text style={styles.text}>Esqueceu sua senha?</Text>
                    <Text style={styles.subtext}>
                        Não esquenta, {'\n'}
                        vamos dar um jeito nisso.
                    </Text>
                </View>

                <TextInput style={styles.email} placeholder='E-mail' onChangeText={text => setEmail(text)} />
                    

                <TouchableOpacity disabled={!enable} style={enable ? styles.button : styles.buttonDisable} onPress={sendReset}>
                    <Text style={enable ? styles.buttonText : styles.buttonTextDisable}>Entrar</Text>
                </TouchableOpacity>

            </View>

    

        </KeyboardAvoidingView>
    );
}

export default SignIn;