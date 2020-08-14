import React from 'react'
import SignIn from '../pages/SignIn'
import Swipe from '../pages/Swipe'

import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../pages/SignUp'
import SuccessSignUp from '../pages/SuccessSignUp'

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName='Swipe'
    >
        <AuthStack.Screen name='Swipe' component={Swipe} />
        <AuthStack.Screen name='SignIn' component={SignIn} />
        <AuthStack.Screen name='SuccessSignUp' component={SuccessSignUp} />
        <AuthStack.Screen name='SignUp' component={SignUp} />

    </AuthStack.Navigator>
)

export default AuthRoutes