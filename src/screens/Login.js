import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    ImageBackground, 
    Alert, 
    AsyncStorage 
} from 'react-native';


export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            login: 'Edd',
            senha: '123',
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
        Alert.alert('verificar', login)
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
        <ImageBackground source={
            require('../../assets/login-bck.png')}
            style={estilos.imageContainer}
        >
            <View style={estilos.container}>

                <View style={estilos.formBox}>
                    <Image style={estilos.logotipo} source={require('../../assets/rn-android-ios.png')} />

                    <View style={estilos.formulario}>
                        <TextInput value={this.state.login} placeholderTextColor="white" style={estilos.inputField} placeholder="Username"
                            onChangeText={(valor) => {
                                this.setState({ login: valor })
                            }}
                        ></TextInput>
                        <TextInput value={this.state.senha} placeholderTextColor="white" style={estilos.inputField} placeholder="Password" secureTextEntry
                            onChangeText={(valor) => {
                                this.setState({ senha: valor })
                            }}
                        ></TextInput>
                        <TouchableOpacity style={estilos.loginButton}>
                            <Text style={estilos.textLoginButton} onPress={() => {
                                this.login()
                            }}>Sign In</Text>
                            
                        </TouchableOpacity>

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
    );
}
};



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
        backgroundColor: '#23c1bd',
        padding: 20,
        opacity: 0.90,
    },
    formBox: {
        width: '95%',
        // height: '95%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 2, borderColor: 'red',
    },
    formulario: {
        width: '100%',
    },
    logotipo: {
        width: 200,
        height: 100,
        marginVertical: 45,
        borderRadius: 10,
    },
    inputField: {
        height: 50,
        width: '100%',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        // backgroundColor: '#65d5e8',
        backgroundColor: 'white',
        color: '#23c1bd',
        // opacity: 1,
        borderRadius: 25,


    },
    loginButton: {
        height: 50,
        width: '100%',
        marginTop: 30,
        padding: 10,
        backgroundColor: '#65d5e8',
        borderRadius: 25,

    },
    textLoginButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
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