import React, { Component } from 'react'

// Navigators
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

// Componentes
import {
  ProfileScreen,
  CalcScreen,
} from "./src/screens";
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']
import LoginScreen from "./src/screens/Login";
import LogoutScreen from "./src/screens/Logout";
import Sidebar from "./src/components/Sidebar/";

// Criação do app
const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => <Sidebar {...props} />

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login"
          drawerContent={(props) => CustomDrawerContent(props)}
          drawerContentOptions={{
            activeTintColor: '#3695b1',
            inactiveTintColor: '#3695b1',
            itemStyle: { marginVertical: 15, size: 40},
            labelStyle: {fontSize: 15},
          }}
          hideStatusBar={true}
          drawerType="slide"
          edgeWidth="35"
        >
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ gestureEnabled: false }}
            keyboardDismissMode="none"
          />
          <Drawer.Screen name="Calculadora" component={CalcScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}