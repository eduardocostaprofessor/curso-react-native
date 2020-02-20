import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
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

    componentDidMount = async () => {
        // const URL = 'http://localhost:3002/api/IMC'
        const URL = 'http://172.20.10.2:3002/api/IMC'
        this.mostraActiveIndicator( true )
        try {
            
            const response = await axios.get(URL)
            const dados = response.data
            // console.log(dados);
            this.setState({ arrResultado: dados.docs })
            
        } catch (error) {
            // console.log(error);
        }
        this.mostraActiveIndicator( false )
    }

    mostraActiveIndicator = mostra  => this.setState( {loading: mostra} )

    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <View >
                        <Text style={styles.title}><MaterialCommunityIcons name="doctor" size={50} color="#fff" />  IMC</Text>
                        {this.state.loading ? <ActivityIndicator size="large" color="#fff" /> : null}
                    </View>

                    <View style={styles.line}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="João Silva"
                            value={this.state.nome}

                            onChangeText={(textNome) => {
                                this.setState({
                                    nome: textNome
                                })
                            }}
                        />
                    </View>

                    <View style={styles.line}>
                        <Text style={styles.label}>Peso</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="78"
                            value={this.state.peso}
                            keyboardType={'numeric'}

                            onChangeText={(textPeso) => {
                                const peso = textPeso.replace(",", ".")
                                this.setState({
                                    peso: parseFloat(peso)
                                })
                            }}
                        />
                    </View>

                    <View style={styles.line}>
                        <Text style={styles.label}>Altura</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="1,78"
                            value={this.state.altura}
                            keyboardType={'numeric'}

                            onChangeText={(textAltura) => {
                                const altura = textAltura.replace(",", ".")
                                this.setState({
                                    altura: parseFloat(altura)
                                })
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.calcularButtom}
                        onPress={() => {
                            const nome = this.state.nome.trim();
                            const altura = this.state.peso;
                            const peso = this.state.altura;
                            // console.log(nome);
                            // console.log(altura);
                            // console.log(peso);
                            // return false
                            if (nome === '' || altura === '' || peso === '') {
                                Alert.alert("Atenção!", "Preencha todos os campos", [], { cancelable: false })
                            } else {
                                const IMC = (this.state.peso / (this.state.altura ** 2)).toFixed(2);

                                this.setState({ loading: true })
                                const pessoa = {
                                    nome,
                                    altura,
                                    peso,
                                    IMC
                                }

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
                            }

                        }}>
                        <Text style={styles.calcularText}> Calcular </Text>
                    </TouchableOpacity>

                    {/* <View> */}
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

                    {/* </View> */}
                </View>
            </ScrollView>
        )
    }
}