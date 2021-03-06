import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

const Landing: React.FC = () => {
    const { signOut } = useContext(AuthContext)
    const { navigate } = useNavigation()
    const [ totalConnections, setTotalConnections ] = useState(0)

    useEffect(() => {
        api.get('/connections').then(resp => {
            const { total } = resp.data

            setTotalConnections(total)
        })
    }, [])

    function handleNavigateToGiveClassPage() {
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPages() {
        navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <RectButton onPress={signOut}>
                <Text>Sign Out</Text>
            </RectButton>

            <View style={styles.buttonsContainer}>
                <RectButton  onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClassPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>
                        Dar aulas
                    </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    );
}

export default Landing;