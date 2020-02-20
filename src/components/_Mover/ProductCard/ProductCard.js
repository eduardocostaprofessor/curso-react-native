import React from 'react'
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function () {
    return (
        <View style={styles.container}>
            <Image
                style={styles.cardImage}
                source={
                    {
                        uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/FNK_PAN-FRIED-SALMON-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558115714985.jpeg'
                    }
                }
            />

            <View>
                <Text style={styles.product}>Salmon Bowl</Text>
                <Text style={styles.price}>R$ 24,00</Text>
            </View>

            <Entypo name="plus" size={24} color="black" />
        </View>
    )
}