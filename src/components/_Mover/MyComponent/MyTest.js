import React, { Component } from "react"
import { Alert, Button } from "react-native"

// import styles from "./styles"

export default class MyTest extends Component {

    alertMessage = (msg) => {
        Alert.alert(
            'Mensagem',
            msg,
            [
                { text: 'Lembrar Depois', onPress: () => this.clickedFromAlertHandle('Depois') },
                { text: 'Cancelar', onPress: () =>  this.clickedFromAlertHandle('Cancelado') },
                { text: 'Ok', onPress: () =>  this.clickedFromAlertHandle('Ok') },

            ],
            { cancelable: false }
        )
    }

    clickedFromAlertHandle = m => (console.log(m) )

    render() {
        return (

            <Button title="Clique Aqui" onPress={() => {
                this.alertMessage('Você Clicou no botão')
            }} />
        )

    }


}