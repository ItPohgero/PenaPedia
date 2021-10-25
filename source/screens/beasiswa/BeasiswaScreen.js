import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Kampus from './components/Kampus';
import Color from '../../utils/Color';

const BeasiswaScreen = () => {
  const images = [
    {img: require('../../assets/image/slide/1.png')},
    {img: require('../../assets/image/slide/2.png')},
    {img: require('../../assets/image/slide/3.png')},
    {img: require('../../assets/image/slide/4.png')},
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Color.first,
          width: '100%',
          height: 30,
          marginBottom: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'orange',
            paddingHorizontal: 30,
            height: 30,
            bottom: -10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}>
          <Text style={{ color:'white' }}>KampusPedia</Text>
        </View>
      </View>
      <Kampus data={images} />
    </View>
  );
};

export default BeasiswaScreen;

const styles = StyleSheet.create({});
