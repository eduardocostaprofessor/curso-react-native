import  React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}







// import React from 'react';
// import { NavigationContainer} from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Feather } from "@expo/vector-icons";

// import { 
//   ProfileScreen,
//   MessageScreen,
//   ActivityScreen,
//   ListScreen,
//   ReportScreen,
//   StatisticScreen,
//   SigninScreen
//  } from "./Screens";

//  const Drawer = createDrawerNavigator()

//  export default  () => {
//    return (
//   <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Profile">
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Message" component={MessageScreen} />
//       <Drawer.Screen name="Activity" component={ActivityScreen} />
//       <Drawer.Screen name="List" component={ListScreen} />
//       <Drawer.Screen name="Statistic" component={ReportScreen} />
//       <Drawer.Screen name="StatisticScreen" component={StatisticScreen} />
//       <Drawer.Screen name="Signin" component={SigninScreen} />
//     </Drawer.Navigator>
//   </NavigationContainer>
//   )
//  }