import React from 'react'
import { View, Text, StyleSheet } from "react-native";

import  MyComponent from "./components/MyComponent/MyComponent";
import  Person from "./components/Person/Person";

const pessoas = [
  {
    codigo: 1,
    nome: "Eduardo Costa",
    idade: 37,
    email: "eduardocostaprofessor@gmail.com"
  },
  {
    codigo: 2,
    nome: "Ana Maria",
    idade: 20,
    email: "ana.maria@gmail.com"
  },
  {
    codigo: 3,
    nome: "José",
    idade: 29,
    email: "jo.ze@yahoo.com.br"
  },
  
]

const MeuApp = function () {

  return (
    <View style={estilos.container}>

      {
        pessoas.map(function(pessoa){
          return <Person 
            key={pessoa.codigo}
            xpto="sdf"  
            nome={pessoa.nome} 
            idade={pessoa.idade} 
            email={pessoa.email} 
          />
        })
      }
   
   
    
    

      {/* <MyComponent txt="Texto do" />
      <MyComponent txt="Componente" /> */}
    </View>
  )
}

const estilos = StyleSheet.create({
    container : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#23c1bd'
    },
})

export default MeuApp