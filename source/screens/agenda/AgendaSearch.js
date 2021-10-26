import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Color from '../../utils/Color';
import BackToAgenda from './../../include/BackToAgenda';

const AgendaSearch = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackToAgenda navigation={navigation} />
      <View style={styles.header}>
        <View style={{flex: 10, justifyContent: 'center', marginRight: 10}}>
          <TextInput style={styles.input} placeholder="Search..." />
        </View>
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
    paddingLeft: 10,
    borderRadius: 5,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
});
