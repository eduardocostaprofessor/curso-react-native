import React, { Component } from 'react'
import { ScrollView } from 'react-native';

// Navigators
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

// Componentes
import {
  ProfileScreen,
  CalcScreen,
  SignoutScreen,
} from "./src/screens";

import Login from "./src/screens/Login";


// Criação do app
const Drawer = createDrawerNavigator();

export default class App extends Component {
  
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login"
          // drawerContent={Perfil}
          drawerContentOptions={{
            activeTintColor: '#23c1bd',
            itemStyle: { marginVertical: 30, },
          }}
          hideStatusBar={true}
          drawerType="slide"
          // hideStatusBar={true}
        >
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen 
            name="Login" 
            component={Login}
            options={{ gestureEnabled: false }}
          />
          <Drawer.Screen name="Calculadora" component={CalcScreen} />
          <Drawer.Screen name="Signout" component={SignoutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}