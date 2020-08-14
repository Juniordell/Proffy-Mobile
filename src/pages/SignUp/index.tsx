import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper'

import styles from './styles';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import { Ionicons, Feather } from '@expo/vector-icons';

const SignUp: React.FC = () => {

    const { navigate } = useNavigation()

    const [ enable, setEnable ] = useState(false)
    const [ enable2, setEnable2 ] = useState(false)
    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ visible, setVisible ] = useState(false)
    const [ checked, setChecked ] = useState(false)


    useEffect(() => {
        if ( name && lastName ) {
            setEnable(true)
        }

        if ( name === '' || lastName === '' ) {
            setEnable(false)
        }

    }, [lastName, name])

    useEffect(() => {
        if ( email.includes('@') && password.length > 5 && name && lastName ) {
            setEnable2(true)
        }

        if ( !(email.includes('@')) || password.length < 6 ) {
            setEnable2(false)
        }

    }, [password, email])

    function backToSignIn() {
        navigate('SignIn')
    }

    function goToSuccess() {
        navigate('SuccessSignUp')
    }

    return (
        <Swiper
            loop={false} 
            paginationStyle={{
                justifyContent: 'flex-end',
                position:'absolute',
                right: 32,
                top: -530
            }}
            activeDotColor="#8257E5"
            dotStyle={{ width: 4, height: 4 }}
            activeDotStyle={{ width: 4, height: 4 }}
        >

            <KeyboardAvoidingView behavior="position" style={styles.container}>
                <TouchableOpacity onPress={backToSignIn} style={{marginTop: 5}}>
                    <Ionicons name="ios-arrow-round-back" size={30} color="#9C98A6" />
                </TouchableOpacity>

                <View style={styles.texts}>
                    <Text style={styles.text1}>
                        Crie sua  {'\n'}
                        conta gratuita
                    </Text>

                    <Text style={styles.text2}>
                        Basta preencher esses dados  {'\n'}
                        e você estará conosco.
                    </Text>
                </View>

                <View>

                    <Text style={styles.title}>01. Quem é você?</Text>
                    <TextInput style={[styles.name, styles.input]} placeholder='Nome' onChangeText={text => setName(text)} />
                    <View>
                        <TextInput style={[styles.lastName, styles.input]} placeholder='Sobrenome' onChangeText={text => setLastName(text)} />
                        
                    </View>

                    <TouchableOpacity disabled={!enable} style={enable ? styles.button : styles.buttonDisable}>
                        <Text style={enable ? styles.buttonText : styles.buttonTextDisable}>Próximo</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>

            <KeyboardAvoidingView style={styles.container}>

                <TouchableOpacity onPress={backToSignIn} style={{marginTop: 5}}>
                    <Ionicons name="ios-arrow-round-back" size={30} color="#9C98A6" />
                </TouchableOpacity>

                <View>

                    <Text style={styles.title}>02. Email e Senha</Text>
                    <TextInput style={[styles.email, styles.input]} placeholder='Email' onChangeText={text => setEmail(text)} />
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

                    <TouchableOpacity onPress={goToSuccess} disabled={!enable2} style={enable2 ? styles.button2 : styles.buttonDisable}>
                        <Text style={enable2 ? styles.buttonText : styles.buttonTextDisable}>Concluir cadastro</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>

        </Swiper>
  );
}

export default SignUp;