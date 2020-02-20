import React from "react"
import { Text, ShadowPropTypesIOS } from "react-native"
import styles from "./styles"

const MyComponent = function (props) {
    return (
        <Text  style={styles.texto}>
           {props.txt} 
        </Text>
    )
}

export default MyComponent