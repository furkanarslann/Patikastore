import React from "react";
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DBDEDE',
        height: Dimensions.get('window').height / 15,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
});
export default styles;