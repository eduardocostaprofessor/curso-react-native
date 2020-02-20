import React from 'react'
import { View } from "react-native";
import styles from "./styles";

import { MaterialIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function () {
    return (
        <View style={styles.container}>
            <MaterialIcons name="arrow-back" size={25} color="white" />

            <View style={styles.rightButtoms}>
                <MaterialCommunityIcons name="blackberry" size={25} color="white" />
                <Feather name="check" size={25} color="white" />
            </View>
        </View>
    )
}