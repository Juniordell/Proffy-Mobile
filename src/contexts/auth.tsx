import React, { createContext, useState } from 'react'
import * as auth from '../services/auth'
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextData {
    signed: boolean,
    user: object | null,
    signIn(): Promise<void>,
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [ user, setUser ] = useState<object | null>(null)

    async function signIn() {
        const response = await auth.signIn()
        
        setUser(response.user)

        await AsyncStorage.setItem('@Proffy:user', JSON.stringify(response.user))
    }

    function signOut() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
    


export default AuthContext