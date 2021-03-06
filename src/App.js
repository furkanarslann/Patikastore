import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TextInput, FlatList, Image } from 'react-native';
import ProductCard from './components/product_card/product_card';
import SearchBar from './components/search_bar/search_bar';
import product_data from './data/product_data.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {

  const renderItem = ({ item }) => <ProductCard product={item} />
  const [filteredData, setFilteredData] = useState(product_data);
  // console.log(filteredData);
  return (
    <SafeAreaView>

      <Text style={styles.header_text}><Icon name='shopping-basket' size={23} color='purple' style={styles.icon} /> PATIKA STORE</Text>

      <SearchBar placeholder={'Search...'} setFilteredData={setFilteredData} />
      <View style={styles.body}>
        <FlatList
          horizontal={false}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>


    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  header_text: {
    paddingTop: 5,
    paddingBottom: 3,
    color: 'purple',
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',

  },

  body: {
    marginHorizontal: 5,
    marginBottom: 220,
  },


});