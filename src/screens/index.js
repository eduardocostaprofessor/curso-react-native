import React from 'react'
import Screen from './Screen'

/**
 * 
 * Cada Screen informa o seu componente body via props
 */
export const ProfileScreen = ( { navigation }) => <Screen navigation={navigation} name="Profile" />
export const CalcScreen = ({ navigation }) => <Screen navigation={navigation} name="Calculadora" />
export const SigninScreen = ({ navigation }) => <Screen navigation={navigation} name="Signin" />