import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import backgroundImage from '../../assets/images/Background2.png'
import doneIcon from '../../assets/images/done.png'

const SuccessSignUp: React.FC = () => {

    const { navigate } = useNavigation()

    function goToSignIn() {
        navigate('SignIn')
    }

  return (
    <View style={styles.container}>

        <ImageBackground resizeMode='contain' style={styles.bgImage} source={backgroundImage}>
            <Image source={doneIcon} resizeMode='contain' />

            <Text style={styles.text1}>
                Cadastro{'\n'}
                concluído!
            </Text>

            <Text style={styles.text2}>
                Agora você faz parte da {'\n'}
                plataforma da Proffy
            </Text>
        </ImageBackground>



        <TouchableOpacity onPress={goToSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>

    </View>
  );
}

export default SuccessSignUp;