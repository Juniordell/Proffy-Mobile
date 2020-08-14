import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import Background from '../../assets/Swipe/background.png'
import Background2 from '../../assets/Swipe/BackgroundTwo.png'
import studyIcon from '../../assets/Swipe/study.png'
import giveClassesIcon from '../../assets/Swipe/give-classes.png'
import arrowIcon from '../../assets/Swipe/back.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Swipe: React.FC = () => {
    const { navigate } = useNavigation()

    function handleNavigator() {
        navigate('SignIn')
    }

    const [ idxActive, setIdxActive ] = useState(0)

    const swipe: any = React.createRef()

    function onPressNext() {
        if (idxActive < 5) {
            swipe.scrollBy(1)
        }
    }

    return (
        <Swiper
            loop={false} 
            paginationStyle={{
                justifyContent: 'flex-start',
                marginLeft: 40,
                position:'absolute',
                bottom:60,
            }}
            activeDotColor="#8257E5"
            dotStyle={{width: 4, height: 4, borderRadius: 0}}
            activeDotStyle={{width: 4, height: 4, borderRadius: 0}}
            ref={swipe}
            onIndexChanged={idxActived => setIdxActive(idxActived)}
            
        >

            <View style={styles.container}>
                <View style={styles.first}>
                    <ImageBackground
                        source={Background}
                        style={styles.backgroundImage}
                        resizeMode='contain'
                    >
                        <Image source={studyIcon} style={{ marginTop: 50 }} resizeMode='contain' />

                    </ImageBackground>
                </View>

                <View style={styles.main}>
                    <View style={styles.text}>
                        <Text style={styles.number}>01.</Text>
                        <Text style={styles.phrase}>
                            Encontre vários {'\n'}
                            professores para {'\n'}
                            ensinar você
                        </Text>
                    </View>


                </View>

                <TouchableOpacity style={styles.arrowButton} onPress={onPressNext}>
                    <Image source={arrowIcon} />
                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <View style={styles.second}>
                    <ImageBackground
                        source={Background2}
                        style={styles.backgroundImage}
                        resizeMode='contain'
                    >
                        <Image source={giveClassesIcon} style={{ marginTop: 50 }} resizeMode='contain' />

                    </ImageBackground>
                </View>

                <View style={styles.main}>
                    <View style={styles.text}>
                        <Text style={styles.number}>02.</Text>
                        <Text style={styles.phrase}>
                            Ou dê aulas  {'\n'}
                            sobre o que você  {'\n'}
                            mais conhece
                        </Text>
                    </View>


                </View>

                <TouchableOpacity style={styles.arrowButton} onPress={handleNavigator}>
                    <Image source={arrowIcon} />
                </TouchableOpacity>

            </View>

        </Swiper>
        
    );
}

export default Swipe;