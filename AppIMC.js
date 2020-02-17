import React from 'react'
import { View, StyleSheet, Text } from "react-native";

// import Header from "./components/Header/Header";
// import SubHeader from "./components/SubHeader/SubHeader";
// import ProductList from "./components/ProductList/ProductList";
// import MyTest from "./components/MyComponent/MyTest";
// import StateComponent from "./components/StateComponent/StateComponent";
import IMC from "./components/Imc/Imc";
export default function () {
  return (
    <View style={estilos.container}>
      < IMC />
      
      {/* 
      <StateComponent />
      <Header />
      <SubHeader />
      <ProductList /> */}
    </View>
  )
}



const estilos = StyleSheet.create({
  container: {
    flex: 1, //ocupa x proporção do elemento pai
    paddingTop: 40,
    backgroundColor: '#23c1bd',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#fff',
  },
})



// export default function () {
//   return (
//     <View style={estilos.container}>

//       <View style={estilos.caixa1}>
//         <Text>CAIXA 1</Text>
//       </View>

//       <View style={estilos.caixa2}>
//         <Text>CAIXA 2</Text>
//       </View>
//       <View style={estilos.caixa3}>
//         <Text>CAIXA 3</Text>
//       </View>
//     </View>
//   )
// }


// const estilos = StyleSheet.create({
//   container: {
//     flex: 1, //ocupa x proporção do elemento pai
//     paddingTop: 40,
//     backgroundColor: '#23c1bd',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   caixa1: {
//     flex: 1,
//     maxHeight: 50,
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   caixa2: {
//     flex: 2,
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   caixa3: {
//     flex: 2,
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
// })

