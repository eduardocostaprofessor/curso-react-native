import React from 'react'
import { View, Image } from "react-native";
import styles from "./styles";
import ProductCard from "../ProductCard/ProductCard";

export default function () {
    return (
            <View style={styles.containerContent}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                
            </View>
    )
}