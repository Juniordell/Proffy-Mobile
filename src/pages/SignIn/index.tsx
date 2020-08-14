import React, { useContext, useState, useEffect } from 'react';
import { View, Button, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import AuthContext from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'

import backgroundImage from '../../assets/images/Background.png'
import intro from '../../assets/images/Intro.png'
import CheckBox from 'react-native-check-box'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles'

const SignIn: React.FC = () => {

    const { navigate } = useNavigation()

    const [ checked, setChecked ] = useState(false)
    const [ enable, setEnable ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ visible, setVisible ] = useState(false)

    const { signed, signIn } = useContext(AuthContext)

    useEffect(() => {
        if (email.includes('@') && password.length > 5 ) {
            setEnable(true)
        }

        if ( !(email.includes('@')) || password.length < 6 ) {
            setEnable(false)
        }

    }, [password, email])
    
    function handleSignIn() {
        signIn()
    }

    function goToSignUp() {
        navigate('SignUp')
    }

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.bgHeader} resizeMode='contain' source={backgroundImage} />
                <Image style={styles.logo} resizeMode="contain" source={intro} />
            </View>
            
            <View style={styles.main}>

                <View style={styles.headerMain}>
                    <Text style={styles.textLogin}>Fazer login</Text>
                    <TouchableOpacity onPress={goToSignUp}>
                        <Text style={styles.textSignIn}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>

                <TextInput style={[styles.email, styles.input]} placeholder='E-mail' onChangeText={text => setEmail(text)} />
                
                <View>
                    <TextInput secureTextEntry={!visible} style={[styles.password, styles.input]} placeholder='Senha' onChangeText={text => setPassword(text)} />
                    
                    <TouchableOpacity style={styles.icon} onPress={() => setVisible(!visible)}>

                        <Feather
                            name={visible ? 'eye-off' : 'eye'}
                            size={20}
                            color={visible ? '#8257E5' : '#9C98A6'} 
                        />

                    </TouchableOpacity>
                </View>
                    

                <View style={styles.label}>
                    <View style={styles.labelCheck}>
                        {/* <CheckBox isChecked={checked} onClick={() => setChecked(!checked)} style={{ paddingRight: 5, paddingBottom: 2 }} /> */}
                        <Ionicons
                            name={checked ? "ios-checkbox" : "ios-checkbox-outline"}
                            size={24} color="#04D361"
                            onPress={() => setChecked(!checked)}
                            style={{ paddingRight: 5, paddingBottom: 2 }}
                        />
                        <Text style={styles.forgot}>Lembrar-me</Text>
                    </View>
                    
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity disabled={!enable} style={enable ? styles.button : styles.buttonDisable} onPress={handleSignIn}>
                    <Text style={enable ? styles.buttonText : styles.buttonTextDisable}>Entrar</Text>
                </TouchableOpacity>

            </View>

    

        </KeyboardAvoidingView>
    );
}

export default SignIn;