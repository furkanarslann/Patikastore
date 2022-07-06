import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TextInput, FlatList, Image } from 'react-native';
import ProductCard from './components/product_card/product_card';
import product_data from './data/product_data.json';

const App = () => {

  const [text, onChangeText] = React.useState("");
  const renderItem = ({ item }) => <ProductCard product={item} />

  return (
    <SafeAreaView>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput
        style={styles.search_container}
        placeholder='Search...'
        onChangeText={onChangeText}
        value={text} />

      <FlatList
        horizontal={false}
        data={product_data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  header_text: {
    padding: 10,
    color: 'purple',
    fontWeight: '700',
    fontSize: 22,
  },
  search_container: {
    backgroundColor: '#D4D3D4',
    height: Dimensions.get('window').height / 15,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

});