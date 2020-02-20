import { StyleSheet , Dimensions} from "react-native"

export default StyleSheet.create({
    layer: {
        height: Dimensions.get('window').height * 0.25,
        opacity: 0.7,
    },
    backgroundProfile: {
        padding: 16,
        paddingTop: 48,
    },
})