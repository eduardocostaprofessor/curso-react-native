import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";

import {
    DrawerItemList,
} from '@react-navigation/drawer'

import estilos from "./styles";

export default (props) => {

    return (
        <ScrollView>
            <ImageBackground style={estilos.backgroundProfile} source={require('../../../assets/perfil-bkg.jpg')}>
                <View style={estilos.layer}>

                    {/* Perfil */}
                    <View style={estilos.profile}>
                        <Text style={{ fontSize: 50, color: 'white' }}>Profile do usuário</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={estilos.drawerItens}>
                <DrawerItemList {...props} />
            </View>
        </ScrollView>
    );
}