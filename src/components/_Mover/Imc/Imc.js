import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import axios from "axios";
import styles from "./styles";



export default class Imc extends Component {
    state = {/**valor default do state */
        loading: false,
        nome: '',
        altura: '',
        peso: '',
        IMC: '',
        arrResultado: [
            {
                nome: 'Eduardo Costa',
                altura: '1.67',
                peso: '85',
                IMC: '35.98'
            },
        ]
    }

    mostraLoading = (mostra) => {
        this.setState({ loading: mostra })
    }

    componentDidMount = async () => {
        const URL = 'http://192.168.3.230:3002/api/IMC'
        this.mostraLoading(true)

        try {
            const response = await axios.get(URL)
            this.setState({
                arrResultado: response.data.docs
            })

        } catch (error) {

        }
        this.mostraLoading(false)
    }



    atualizaNome = (textNome) => {
        this.setState({
            nome: textNome
        })
    }

    guardaIMC = async () => {
        const nome = this.state.nome.trim();
        const altura = this.state.altura;
        const peso = this.state.peso;

        if (nome === '' || altura === '' || peso === '') {
            Alert.alert("Atenção!", "Preencha todos os campos", [], { cancelable: false })
        } else {
            const IMC = (this.state.peso / (this.state.altura ** 2)).toFixed(2);

            this.mostraLoading(true )
            const pessoa = {
                nome,
                altura,
                peso,
                IMC
            }

            try {
                const URL = 'http://172.20.10.2:3002/api/IMC'
                // const URL = 'http://localhost:3002/api/IMC'
                const insere = await axios.post(URL, pessoa)
                
                const res = this.state.arrResultado
                res.unshift(pessoa)
                
                setTimeout(() => {
                    this.setState({
                        arrResultado: res,
                        nome: '',
                        altura: '',
                        peso: '',
                        loading: false,
                    })
                }, 400)
            } catch (error) {

            }
        }

    }

    
    atualizaAltura = (textAltura) => {
        const altura = textAltura.replace(",", ".")
        this.setState({
            altura: parseFloat(altura)
        })
    }

    atualizaPeso = (textPeso) => {
        const peso = textPeso.replace(",", ".")
        this.setState({
            peso: parseFloat(peso)
        })
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <View >
                        <Text style={styles.title}><MaterialCommunityIcons name="doctor" size={50} color="#fff" />  IMC</Text>
                        {
                            this.state.loading ?
                                <ActivityIndicator size="small" color="#fff" />
                                : null
                        }

                    </View>

                    <View style={styles.line}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="João Silva"
                            value={this.state.nome}
                            onChangeText={this.atualizaNome}
                        />
                    </View>

                    <View style={styles.line}>
                        <Text style={styles.label}>Peso</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="78"
                            value={this.state.peso.toString()}
                            keyboardType={'numeric'}

                            onChangeText={this.atualizaPeso}
                        />
                    </View>

                    <View style={styles.line}>
                        <Text style={styles.label}>Altura</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="1,78"
                            value={this.state.altura}
                            keyboardType={'numeric'}

                            onChangeText={this.atualizaAltura}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.calcularButtom}
                        
                        onPress={this.gravaIMC}>
                        <Text style={styles.calcularText}> Calcular </Text>
                    </TouchableOpacity>


                    {

                        this.state.arrResultado.map((pessoa) => {
                            return (
                                <View key={Math.random()} style={styles.cardContainer}>

                                    <Text style={styles.cardNome}>
                                        <SimpleLineIcons name="user" color="grey" size={15} /> {pessoa.nome}
                                    </Text>

                                    <Text style={styles.cardData}>Altura: <Text style={styles.cardDataValue}>{pessoa.altura.toString().replace(".", ",")}</Text></Text>
                                    <Text style={styles.cardData}>Peso: <Text style={styles.cardDataValue}>{pessoa.peso.toString().replace(".", ",")}</Text></Text>
                                    <Text style={styles.cardData}>IMC: <Text style={styles.cardDataValue}>{pessoa.IMC.toString().replace(".", ",")}</Text></Text>
                                </View>
                            )
                        })

                    }

                </View>
            </ScrollView>
        )
    }
}