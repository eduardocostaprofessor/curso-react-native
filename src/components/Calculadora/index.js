import React, { Component } from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"

import styles from "./style"

export default class Calculadora extends Component {

    constructor() {
        super()
        // Reinicia display: true/false
        // Operador guarda e reinicia DisplayPort true, muda reinicia pra false 
        // (Já tem operador soma, senão guarda operador)

        this.state = {
            displayText: '0',
            reiniciaDisplay: false,
            operador: '',
            n1: 0,
            total: 0
        }
    }

    addOperacao = (op) => {

        // operação ainda não foi utilizada?
        if (this.state.operador === '') {
            this.setState({
                operador: op,
                n1: parseFloat(this.state.displayText),
                reiniciaDisplay: true
            })
        } else {//fazer a conta
            const res = this.fazerConta(op)
            this.setState({
                displayText: res,
                reiniciaDisplay: true,
                n1: res
            })

        }

    }

    // fazer conta funcition
    fazerConta = (op) => {
        let n1 = this.state.n1//já está com float
        let n2 = parseFloat(this.state.displayText)
        let res = 0

        switch (op) {
            case '+':
               return n1 + n2
            case '-':
                return n1 - n2
                
            case '*':
                return  n1 * n2

            default:
                break;
        }
    }
    zeraTudo = () => {
        this.setState({
            displayText: '0',
            reiniciaDisplay: false,
            operador: '',
            n1: 0,
        })
    }

    // Concatena os números do display
    adicionaNumero = n => {
        if (this.state.reiniciaDisplay) {
            this.setState({ displayText: n, reiniciaDisplay: false })

        } else {
            let nAnterior = this.state.displayText
            this.setState({ displayText: nAnterior === '0' ? n : nAnterior + n })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.display}>
                    <Text style={styles.displayText}>{this.state.displayText}</Text>
                </View>

                <View style={styles.padButtons}>
                    <View style={styles.buttonsNumber}>

                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.zeraTudo()}
                        >
                            <Text style={styles.buttomText}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => Alert.alert('Botão ')}
                        >
                            <Text style={styles.buttomText}>+/-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => Alert.alert('Botão ')}
                        >
                            <Text style={styles.buttomText}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('7')}
                        >
                            <Text style={styles.buttomText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('8')}
                        >
                            <Text style={styles.buttomText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('9')}
                        >
                            <Text style={styles.buttomText}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('4')}
                        >
                            <Text style={styles.buttomText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('5')}
                        >
                            <Text style={styles.buttomText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('6')}
                        >
                            <Text style={styles.buttomText}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('1')}
                        >
                            <Text style={styles.buttomText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('2')}
                        >
                            <Text style={styles.buttomText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => this.adicionaNumero('3')}
                        >
                            <Text style={styles.buttomText}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.adicionaNumero('0')}
                            style={[styles.buttom, styles.zeroButtom]}
                        >
                            <Text style={styles.buttomText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttom}
                            onPress={() => Alert.alert('Botão ')}
                        >
                            <Text style={styles.buttomText}>.</Text>
                        </TouchableOpacity>

                    </View>
                    {/* ************************************ OPERAÇÕES ************************************ */}
                    <View style={styles.buttonsOperationContainer}>
                        <TouchableOpacity
                            style={[styles.buttom, styles.operationButtom]}
                            onPress={() => Alert.alert('Botão ')}
                        >
                            <Text style={[styles.buttomText, styles.buttomsOperationText]}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttom, styles.operationButtom]}
                            onPress={() => this.addOperacao('*')}
                        >
                            <Text style={[styles.buttomText, styles.buttomsOperationText]}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttom, styles.operationButtom]}
                            onPress={() => this.addOperacao('-')}
                        >
                            <Text style={[styles.buttomText, styles.buttomsOperationText]}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttom, styles.operationButtom]}
                            onPress={() => this.addOperacao('+')}
                        >
                            <Text style={[styles.buttomText, styles.buttomsOperationText]}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttom, styles.operationButtom]}
                            onPress={() => this.addOperacao('=')}
                        >
                            <Text style={[styles.buttomText, styles.buttomsOperationText]}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}