import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import backgroundImage from '../../assets/images/Background2.png'
import doneIcon from '../../assets/images/done.png'

const SuccessReset: React.FC = () => {

    const { navigate } = useNavigation()

    function goToSignIn() {
        navigate('SignIn')
    }

    return (
        <View style={styles.container}>

            <ImageBackground resizeMode='contain' style={styles.bgImage} source={backgroundImage}>
                <Image source={doneIcon} resizeMode='contain' />

                <Text style={styles.text1}>
                    Redefinição {'\n'}
                    enviada!
                </Text>

                <Text style={styles.text2}>
                    Boa, agora é só checar o e-mail que foi {'\n'}
                    enviado para você redefinir sua senha {'\n'}
                    e aproveitar os estudos.
                </Text>
            </ImageBackground>



            <TouchableOpacity onPress={goToSignIn} style={styles.button}>
                <Text style={styles.buttonText}>Voltar ao login</Text>
            </TouchableOpacity>

        </View>
    );
}

export default SuccessReset;