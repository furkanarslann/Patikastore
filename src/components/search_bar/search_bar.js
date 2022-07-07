import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './search_bar.style';
import product_data from '../../data/product_data.json'

export default function SearchBar({ placeholder, setFilteredData }) {

    const [text, setText] = React.useState(""); // ready for later search bar functionality

    const handleSearch = text => {
        const filteredData = product_data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredData(filteredData);
        setText(text);
    };


    return (
        <TextInput
            style={styles.container}
            placeholder={placeholder}
            onChangeText={newText => handleSearch(newText)}
            value={text} />
    );
}
