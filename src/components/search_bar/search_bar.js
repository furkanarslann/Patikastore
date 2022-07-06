import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './search_bar.style';

export default function SearchBar({ placeholder }) {

    const [text, onChangeText] = React.useState(""); // ready for later search bar functionality
    return (
        <TextInput
            style={styles.container}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={text} />
    );
}
