import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroScreen01 from '../screens/IntroScreen01'
import IntroScreen02 from '../screens/IntroScreen02'
import IntroScreen03 from '../screens/IntroScreen03'
import IntroScreen04 from '../screens/IntroScreen04'
import IntroScreen05 from '../screens/IntroScreen05'
import LoginScreen from '../screens/LoginScreen'

export type RootStackParamList = {
    IntroScreen01: undefined,
    IntroScreen02: undefined,
    IntroScreen03: undefined,
    IntroScreen04: undefined,
    IntroScreen05: undefined,
    LoginScreen: undefined,
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{
                headerShown: false,
                animation: 'fade'
            }}>
                <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
                <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
                <RootStack.Screen name="IntroScreen03" component={IntroScreen03} />
                <RootStack.Screen name="IntroScreen04" component={IntroScreen04} />
                <RootStack.Screen name="IntroScreen05" component={IntroScreen05} />
                <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    )
}

export default RootNavigator