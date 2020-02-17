import React from 'react'
import { View, Text } from 'react-native'

// Navigators
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

// Componentes
import {
  ProfileScreen,
  CalcScreen,
  SigninScreen
} from "./src/screens";

//funcionalidade em desenvolvimento
function Perfil() {
  return (
    <View style={
      { 
        justifyContent: 'center', alignItems: 'center',
        height: 80,
        width: '100%',
        backgroundColor: 'green'
      }
    }>
      <Text style={{color: "white"}}>Perfil</Text>
    </View>
  );
}

// Criação do app
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile"
        // drawerContent={Perfil}
        drawerContentOptions={{
          activeTintColor: '#23c1bd',
          itemStyle: { marginVertical: 30,},
        }}
      >
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Calculadora" component={CalcScreen} />
        <Drawer.Screen name="Signin" component={SigninScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}