import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './product_card.style'

export default function ProductCard({ product }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: product.imgURL }}></Image>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.stock}>{(product.inStock) ? "" : "STOKTA YOK"}</Text>
        </View>
    )
}

