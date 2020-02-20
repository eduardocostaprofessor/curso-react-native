import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Alert
} from "react-native";

import styles from "./styles";


export default class StateComponent extends Component {
    state = {
        contador: 0
    }
   
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.titleBold]}>teste {this.state.contador}
                    <Text style={[styles.title]}> Cliques</Text>
                </Text>

                <Button title="Incrementar" onPress={() => {
                    this.setState({
                        contador: this.state.contador + 1
                    })
                }} />

                <Button title="Decrementar" onPress={() => {
                    if (this.state.contador === 0) {
                        Alert.alert(
                            'Contador',
                            'Chegou a Zero',
                            [
                                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false },
                        )
                    } else {
                        this.setState({

                            contador: this.state.contador - 1
                        })
                    }
                    
                }} />
            </View>
        )
    }
}
