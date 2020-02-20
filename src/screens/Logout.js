import React from 'react'
import { View, TouchableOpacity, StyleSheet, AsyncStorage, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


/**
 * 
 * Cada Screen informa o seu componente body via props
 */
export default ({ navigation }) => {

    const deslogar = async() =>{
        
        try {
            const desolgou = await AsyncStorage.clear()
            navigation.navigate('Login')
        } catch (error) {
            Alert.alert('Erro', error.toString())
        }
    }

    return (

            <View style={estilos.container}>
                <TouchableOpacity
                    onPress={() => deslogar()}>
                    <MaterialCommunityIcons name="exit-run" size={100} color="white" />
                </TouchableOpacity>
            </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#3695b1',
        justifyContent: "center",
        alignItems: 'center'

    }
})