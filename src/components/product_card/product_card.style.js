import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEFF0",
        padding: 15,
        margin: 10,
        borderRadius: 10,
        justifyContent:'space-between',
    },
    image: {
        height:Dimensions.get('window').height / 4.3,
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
    },
    price: {
        fontWeight: '700'
    },
    stock: {
        color: 'red',
        fontWeight: '700',
    },
});

export default styles;