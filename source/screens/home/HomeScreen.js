import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider, Header, FlashInfo} from './components';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <Slider />
      <FlashInfo />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
