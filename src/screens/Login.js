import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            login: '',
            senha: '',
            LOGIN: 'Edd',
            SENHA: '123',
        }
    }
    componentDidMount() {

        this.verificaLogin()
    }

    verificaLogin = async () => {
        try {
            const login = await AsyncStorage.getItem('login')
            // Alert.alert('verificar', login)
            if (login)
                this.props.navigation.navigate('Calculadora')
        }
        catch (error) {
            // Error retrieving data
        }
    }


    login = async () => {
        const USUARIO = this.state.LOGIN
        const SENHA = this.state.SENHA

        const userUsuario = this.state.login
        const userSenha = this.state.senha

        if (SENHA === userSenha && USUARIO === userUsuario) {

            try {
                await AsyncStorage.setItem('logado', JSON.stringify(true))
                this.props.navigation.navigate('Calculadora')

            } catch (error) {
                Alert.alert('Erro', 'Erro ao efetuar o login')
            }
        } else {
            Alert.alert('Erro', 'Login Inválido')
        } 
    }

    render() {

        // const {navigate} = this.props.navigation;
        return (

            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ImageBackground source={
                    require('../../assets/login-bck.png')}
                    style={estilos.imageContainer}
                >
                    <View style={estilos.container}>

                        <View style={estilos.formBox}>
                            <Image style={estilos.logotipo} source={require('../../assets/rn-android-ios.png')} />

                            {/* FORMULÁRIO */}
                            <View style={estilos.formulario}>
                                <TextInput
                                    style={estilos.inputField}
                                    placeholderTextColor="#3695b1"
                                    placeholder="Username"
                                    value={this.state.login}

                                    onChangeText={(valor) => {
                                        this.setState({ login: valor })
                                    }}
                                />

                                <TextInput
                                    style={estilos.inputField}
                                    placeholderTextColor="#3695b1"
                                    placeholder="Password"
                                    secureTextEntry
                                    keyboardType="numeric"
                                    value={this.state.senha}

                                    onChangeText={(valor) => {
                                        this.setState({ senha: valor })
                                    }}
                                />

                                <TouchableOpacity style={estilos.loginButton}>
                                    <Text
                                        style={estilos.textLoginButton}
                                        onPress={() => {
                                            this.login()
                                        }}>Sign In</Text>
                                </TouchableOpacity>

                                {/* FORGOT / REGISTER */}
                                <View style={estilos.conainerForgot}>
                                    <TouchableOpacity style={estilos.textForgot}>
                                        <Text style={estilos.textForgot}>Forgot Password? |</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.textForgot}>
                                        <Text style={estilos.textForgot}> Register</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={estilos.fazendooo}>
                                <Text style={estilos.textForgot}>
                                    Conect whith
                            <Text style={estilos.socialAccount}> Social Account</Text>
                                </Text>
                            </View>
                        </View>

                    </View>

                </ImageBackground>
            </KeyboardAvoidingView>

        );
    }
};


// <KeyboardAwareScrollView
//     resetScrollToCoords={{ x: 0, y: 0 }}
//     contentContainerStyle={{ flex: 1,  }}
//     // scrollEnabled={false}
// >
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3695b1',
        // padding: 10,
        paddingTop: 40,
        paddingBottom: 20,
        opacity: 0.87,
    },
    formBox: {
        width: '95%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formulario: {
        width: '100%',
        marginTop: 40,
    },
    logotipo: {
        width: 120,
        height: 120,
        borderRadius: 90,
        borderColor: '#65d5e8', borderWidth: 5
    },
    inputField: {
        height: 50,
        width: '100%',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        backgroundColor: 'white',
        color: '#3695b1',
        borderRadius: 25,


    },
    loginButton: {
        height: 50,
        width: '100%',
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: '#65d5e8',
        borderRadius: 25,

    },
    textLoginButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    conainerForgot: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textForgot: {
        fontSize: 18,
        color: '#252d30',
    },
    socialAccount: {
        color: '#565656',
        fontSize: 18,
    }
});