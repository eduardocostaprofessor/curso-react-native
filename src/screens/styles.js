import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3695b1',
        paddingTop: 40
    },
    iconBar: {
        alignItems: 'flex-end',
        margin: 16,

    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20,

    },
    title: {
        fontSize: 35,
        marginLeft: 20,
        color: '#fff',
        fontWeight: '500',
    },
    body: {
        flex: 1,
        marginTop: 20,
        
    },
})