import React, { Component } from 'react'
import { View, Text } from 'react-native'

// Navigators
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


// telas
// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }



// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//           <Drawer.Screen 
//             name="Login" 
//             component={Login}
//             options={{ gestureEnabled: false }}
//           />
//           <Drawer.Screen name="Calculadora" component={CalcScreen} />
//           <Drawer.Screen name="Signout" component={SignoutScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }




// Componentes
import {
  ProfileScreen,
  CalcScreen,
  SignoutScreen,
} from "./src/screens";

import Login from "./src/screens/Login";


// Criação do app
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Perfil */}
      <View style={{alignItems: 'center',justifyContent: 'center', height: 200, width: '100%', backgroundColor: 'purple' }}>
        <Text style={{ fontSize: 50, color: 'white' }}>Profile do usuário</Text>
      </View>
      {/* itens de */}
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login"
          drawerContent={(props) => CustomDrawerContent(props)}
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