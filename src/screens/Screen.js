/**
 * Este componente representa a nossa tela com cabeçalho e corpo
 */

import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'

import styles from "./styles"

/**
 * Body Components
 */
import Profile from "../components/Calculadora"
import Calculadora from "../components/Calculadora"
import Signin from "../components/Calculadora"

import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import { Helpers } from "../utils/Helpers";

/**
 * Escolha do componente na criação da tela 
 * - vem do arquivo Índice de Páginas
 */
export default class Screen extends Component {

    getBodyComponent = (component) => {

        switch (component) {
            case 'Calculadora':
                return <Calculadora />
                break
            case 'Signin':
                return <Signin />
                break
            default:
                return <Profile />
                break
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    {/* ******************** CABEÇALHO ******************** */}
                    <TouchableOpacity
                        style={styles.iconBar}
                        onPress={() => {
                            this.props.navigation.toggleDrawer()
                        }}
                    >
                        <FontAwesome5 name="bars" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <SimpleLineIcons name="calculator" size={38} color="#fff" />
                        <Text style={styles.title}>{this.props.name}</Text>
                    </View>
                    
                    {/* ******************** CORPO ******************** */}
                    <View style={styles.body}>
                        {this.getBodyComponent(this.props.name)}
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}