import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '50%',
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#E9E9E9',
        borderColor: 'blue',
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
    },

    title: {
        fontWeight: 'bold',
        color: 'black',
    },

    price: {},
    stock: {
        color: 'red',
        fontWeight: '700',
    },
});

export default styles;