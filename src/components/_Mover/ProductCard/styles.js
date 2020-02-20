import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        width: '90%',
        height: 75,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#cecece',
        borderRadius: 8,

        shadowRadius: 8,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 5,
        shadowColor: '#cecece',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: '100',
    },
    titleBold: {
        fontWeight: 'bold',
    },
    cardImage: {
        width: 60, 
        height: 60,
        borderRadius: 30,
        borderColor: '#cecece',
        // borderColor: '#fff',
        borderWidth: 3,
    },
    product : {
        fontSize: 20,
        fontWeight: 'bold', 
    },
    price : {
        fontSize: 16,
        color: 'grey', 
    }
})