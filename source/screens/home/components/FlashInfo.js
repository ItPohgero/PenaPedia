import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlashInfo = () => {
  return (
    <View style={{marginHorizontal: 10}}>
      <View style={styles.body}>
        <Text style={styles.head}>Flash</Text>
      </View>
    </View>
  );
};

export default FlashInfo;

const styles = StyleSheet.create({
  body: {backgroundColor: '#fff', height: 100, padding: 10, borderRadius: 10, elevation: 1},
  head: {
    backgroundColor: 'orange',
    position: 'absolute',
    padding: 5,
    top: -10,
    left: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: 'white',
  },
});
