import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TextInput, FlatList, Image } from 'react-native';
import product_data from './data/product_data.json';

const App = () => {

  const [text, onChangeText] = React.useState("");
  const renderItem = ({ item }) => {
    return (
      <View style={styles.product_container}>
        <Image style={styles.product_image} source={{ uri: item.imageURL }}></Image>
        <Text style={styles.product_title}>{item.title}</Text>
        <Text style={styles.product_price}>{item.price}</Text>
        <Text style={styles.product_stock}>{(item.inStock) ? "" : "STOKTA YOK"}</Text>
      </View>
    );
  }
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
  product_container: {
    width: '50%',
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#E9E9E9',
    borderColor: 'blue',
  },
  product_image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },

  product_title: {
    fontWeight: 'bold',
    color: 'black',
  },

  product_price: {},
  product_stock: {
    color:'red',
    fontWeight:'700',
  },


});