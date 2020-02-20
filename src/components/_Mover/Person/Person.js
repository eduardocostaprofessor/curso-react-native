import React from "react"
import { Text, View } from "react-native"
import styles from "./styles"

export default function (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Nome: {props.nome}
            </Text>
            <Text style={styles.texto}>Idade: {props.idade}</Text>
            <Text style={styles.texto}>Email: {props.email}</Text>
        </View>
    )
}

