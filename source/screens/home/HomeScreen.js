import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Slider, Header, FlashInfo} from './components';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>lorem</Text>
      <Header navigation={navigation} />
      <Slider />
      <FlashInfo />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
