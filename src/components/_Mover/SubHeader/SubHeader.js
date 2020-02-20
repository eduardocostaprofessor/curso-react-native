import React from 'react'
import { View, Text } from "react-native";
import styles from "./styles";


export default function () {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.titleBold] }>Healthy 
                <Text style={[styles.title]}>Food</Text>
            </Text>
        </View>
    )
}