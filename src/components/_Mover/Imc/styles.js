import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        // borderStyle: 'solid', borderWidth: 1, borderColor: '#fff',
    },
    title: {
        fontSize: 50,
        marginBottom: 15,
        color: 'white',
        fontWeight: '100',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    label: {
        width: 90,
        fontSize: 22,
        color: 'white',
        textAlign: 'right',
        textTransform: 'uppercase',
        // borderStyle: 'solid', borderWidth: 1, borderColor: '#fff',
    },
    textInput: {
        fontSize: 22,
        width: '70%',
        height: 40,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,

    },
    calcularButtom: {
        marginTop: 15,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
        borderStyle: 'solid', borderWidth: 3, borderColor: '#fff',
        borderRadius: 5,
    },
    calcularText: {
        height: 40,
        padding: 5,
        fontSize: 25,
        backgroundColor: 'white',
        color: '#23c1bd',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    resultado: {
        marginTop: 30,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'red',

    },
    cardContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 5,
        // opacity: .9
    },
    cardNome: {
        fontSize: 18,
        height: 35,
        color: 'grey',
        fontWeight: '600',
    },
    cardData: {
        fontSize: 15,
        height: 22,
        color: 'grey',
        fontWeight: '500',
    },
    cardDataValue: {
        fontWeight: '900'
    }

})