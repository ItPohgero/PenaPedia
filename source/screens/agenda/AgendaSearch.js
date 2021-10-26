import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Home from '../../assets/logoSvg/home.svg';
import Color from '../../utils/Color';

const AgendaSearch = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={{flex: 10, justifyContent: 'center', marginRight: 10}}>
          <TextInput style={styles.input} placeholder="Search..." />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
          <Home widht={15} height={15} fill="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgendaSearch;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.first,
    paddingVertical: 10,
    flexDirection: 'row',
    padding: 4,
  },
  input: {
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
});
