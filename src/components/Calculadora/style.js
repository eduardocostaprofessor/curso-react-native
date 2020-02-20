import { StyleSheet, YellowBox } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    display: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        
    },
    displayText: {
        fontSize: 65,
    },
    padButtons: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    buttonsNumber: {
        width: '75%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'yellow'

    },
    buttom: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.3333%',
        height: '20%',
        backgroundColor: '#3695b1',
        borderColor: 'white', borderWidth: .5,
    },
    buttomText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '300',
    },
    zeroButtom: {
        width: '66.6666%',
    },
    buttonsOperationContainer: {
        width: '25%',
        backgroundColor: '#3695b1',
    },
    operationButtom: {
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#3695b1', borderWidth: .5,
        opacity: .95,
    },
    buttomsOperationText: {
        color: '#23c1bd',
        fontWeight: '300',
    },
})